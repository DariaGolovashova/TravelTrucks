# TravelTrucks
A frontend web application for camper rental service built with Next.js, TypeScript, and React Query.
The app allows users to browse campers, filter them, view detailed information, and submit booking requests.

# Live Demo
https://travel-trucks-rgdh.vercel.app/

# Features
# Home Page
Home page with hero section;
Navigation to catalog;
# Catalog Page
Camper listing from backend API;
Infinite pagination (Load More);
Filtering campers by: 
 - location
 - form
 - engine
 - transmission
# Camper Details Page
Dynamic route /catalog/[camperId]
Image gallery;
Full information about the selected camper;
User reviews with rating system;
Booking form;
# Booking System
Booking request submission to backend API
Loading and error states handling

# Tech Stack
Next.js
TypeScript.
Next.js App Router
TanStack Query(React Query)
CSS Modules
Axios
Swiper (gallery)

# API Reference
'https://campers-api.goit.study'

GET /capmters Get all campers
GET /campers/filters Get available filters for campers
GET /campers/{camperID} Get single camper by ID
GET /campers/{camperID}/reviews Get reviews for cpecific camper
POST /campers/{camperID}/booking-request Create a booking request for specific camper

# Installation
