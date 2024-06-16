# Use the official .NET SDK 8.0 image to build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory
WORKDIR /src

# Copy the project file and restore dependencies
COPY SkyNavigatorBackend.csproj ./
RUN dotnet restore

# Copy the rest of the application code
COPY . .

# Build and publish the application
RUN dotnet publish -c Release -o /app

# Tag this build as backend:0.0.2
FROM mcr.microsoft.com/dotnet/aspnet:8.0

# Set the working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app ./

# Set the ASP.NET Core URLS environment variable
ENV ASPNETCORE_URLS=http://+:80

# Expose the port the API runs on
EXPOSE 80

# Run the application
ENTRYPOINT ["dotnet", "SkyNavigatorBackend.dll"]
