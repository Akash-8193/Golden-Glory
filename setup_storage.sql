-- Create a new storage bucket called 'images'
insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do nothing;

-- Create policies to allow public access (since the admin panel uses anon key)
create policy "Public Access"
  on storage.objects for select
  using ( bucket_id = 'images' );

create policy "Public Insert"
  on storage.objects for insert
  with check ( bucket_id = 'images' );

create policy "Public Update"
  on storage.objects for update
  using ( bucket_id = 'images' );

create policy "Public Delete"
  on storage.objects for delete
  using ( bucket_id = 'images' );
