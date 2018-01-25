# commute-tool

Welcome to Greater Los Angeles Commuting Tool

SUMMARY 

This is an ASP.net Core responsive web app, built primarily on top of MVC Core for the purposes of mapping where residents live in respect to where they travel throughout Los Angeles.

Built and Tested on Chrome for Mac OS Sierra and Windows 10 and iOS 11

An ArcGIS web api is used to display a map of Los Angeles. An ArcGIS widget manages the address search area.  Address searches may be limited to the Los Angeles Region.

A prototype version of the site is provided at:
commutetool.slopesidesystems.com

CHALLENGES FACED
The biggest challenge I faced was trying to get ArcGIS working inside of ASP.net MVC rendering engine.  There was particular rendering (or loading) order to the ARC JavaScript API's there, so all I would  get was a blank map and no error.

I built this code challenge on top of .net core, which is Microsoft's latest cross-platform technology.   IT's now possible to run .net code on not just windows, but Mac and Linux.  This has big advantages.  However, the next biggest challenge was trying to get this ASP.net Core app working at my host.  


CURRENT STATUS
Current Functionality enabled: Ability to display the map of LA and search for an address

TECHNOLOGIES USED
ASP.net Core 2.0  - Server side rendering.   WebAPI compatible.
BootStrap 3.x - Responsive Web Design. Progressive web apps.
Bower - Package manager. Bundle and Minification. This was built in by the scaffolding engine otherwise I would personally use node and webpack.







