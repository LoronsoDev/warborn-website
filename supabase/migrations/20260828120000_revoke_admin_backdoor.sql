-- Security incident 2026-08-26: the "admin-setup" edge function exposed a
-- hardcoded master password ("WARBORN") that created/logged into an admin
-- account from the public frontend. That function, the login UI, and the
-- hidden triggers to open it have been removed from the app entirely
-- (see commit history around this migration).
--
-- This migration revokes any admin role currently granted, so that even a
-- still-valid session token for the backdoor account (or any other account)
-- can no longer pass the has_role(auth.uid(), 'admin') check used by every
-- write policy (products, mods, orders, announcements, feedback, settings).
--
-- Going forward there is no in-app admin login: catalog/price/name changes
-- and order management are done directly via SQL migrations or the SQL
-- Editor by the project owner.

DELETE FROM public.user_roles WHERE role = 'admin';

-- Remove the product row vandalized during the incident ("Sudadera Mierdon
-- (como el server)", price dropped to 0.01) instead of guessing at a
-- restored name/price. Re-add the real product by hand later if wanted.
DELETE FROM public.products WHERE id = 'b4d59507-5dbb-4d63-8c38-a9817a9e8195';

-- Manual follow-up (cannot be done from SQL, do it in the dashboard):
--   Authentication -> Users -> delete the "admin@warborn.local" user.
--   Project Settings -> API -> reset/rotate the service_role key.
--   Project Settings -> Database -> reset the database password.
