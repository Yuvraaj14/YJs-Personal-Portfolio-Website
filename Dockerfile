# Use the Nginx base image
FROM nginx:alpine

# Copy all files from the current directory to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx in the foreground to serve the website
CMD ["nginx", "-g", "daemon off;"]
