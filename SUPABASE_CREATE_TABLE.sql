-- Create bookings table for Balsam Amman demo

create extension if not exists "pgcrypto";

create table if not exists bookings (
  id uuid default gen_random_uuid() primary key,
  service text,
  doctor text,
  date date,
  time text,
  name text,
  phone text,
  email text,
  notes text,
  status text,
  created_at timestamptz default now()
);
