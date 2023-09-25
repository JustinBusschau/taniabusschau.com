# taniabusschau.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/0cdad5b0-7533-441f-bdd4-ac48ca4c0f68/deploy-status)](https://app.netlify.com/sites/taniabusschau/deploys)

## Setup

Setup followed the process outlined at [Get Started with Contentful](https://www.contentful.com/developers/docs/tutorials/general/get-started/#explore-how-the-sample-website-is-built-with-contentful),
but we used [this Portfolio starter](https://github.com/escapemanuele/gatsby-contentful-blog-portfolio) rather than the one referenced in the article.
We upgraded to Gatsby ~4.1.4~ 5.10.0 and React ~16.8.0~ 18.1.0 and removed a lot of unneeded gubbins.
~Also added Apollo GraphQL client for dynamic content (though the only thing this is used for now is the Visitor form submission)~

## Dynamic API ~via Apollo GraphQL~

- ~Apollo GraphQL client ^3.3.21~
- Apollo removed as I couldn't get it co-habiting with Gatsby on Gatsy Cloud builds
- ~Enabled visitor entry add to spreadsheet via [sheet.best](https://sheet.best/)~ Disabled since sheet.best switched to a $9.99 monthly charge
- Contact form now using a feature offered on Netlify (see below)

## Preview site on Gatsby Cloud - DEPRECATED

- This was removed when the sunsetting of Gatsby Cloud was announced

## Hosting on Netlify

- Netlify build triggered on push to `main` - using the `buildify` script
- Netlify URL at https://taniabusschau.netlify.app/
- taniabusschau.com DNS redirecting to this URL

## Troubleshooting the contact form

- First, with the Developer Tools open, fill in the contact form and submit. You should see the name, message and email logged in the console
- Log in to Netlify and go to `AfterMyCoffee` > `taniabusschau.com` > `Site Settings` > `Forms`
- Make sure the notification for new form submissions on the `websiteEmailContact` form are sent to Tania's GMail account

## TODO

- [ ] we have a number of instances where we fetch specific entries from Contentful. These should be made more generic so that Tania can change them whenever she likes
  - [x] ~`src/Components/Navbar.js` : currently fetching the "Tania In Paris" Asset using contentful_id: `x4PpkVtYfEyk5hyOfzQUm`~
  - [ ] `src/pages/contact.js` : currently fetching the image of the envelopes as an Asset using contentful_id: `7nHV7ETDHkTQhDIjJFF5dZ`
- [ ] we are currently using the `useAsPortfolioCover` image for the artwork banner image as well. We might want to separate as two distinct banners
- [x] ~we are currently using the `useAsExhibitionBanner` image for the exhibition list banner image as well. We might want to separate as two distinct banners~
- [ ] we are currently using a 'borrowed' image for the contact us page. Ask Tania to either do an artwork or take a photo of her own to replace this
