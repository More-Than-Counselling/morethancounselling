# More Than Counselling · launch checklist

Updated 16 August 2026. Ticked items are settled. Sections 1 and 2 still need you.

---

## 1. Red-pen the copy

Some of the site is your words and some is mine. These are the pages where the words are still mine.

- [ ] **private.html** · all of it is my draft, including the closing paragraph about not needing the words sorted before you write.
- [ ] **ndis.html** · my draft, apart from the Building capacity section which is now yours. Read the support coordinator paragraph, it makes a claim about your history in your voice.
- [ ] **support-at-home.html** · the client and family half is my draft. The referrer half is your brochure almost word for word and just needs a sanity read.
- [ ] **counselling.html** · your trifold, near verbatim, plus your rewritten "Your body is not working against you." The Family Counselling section is still my draft.
- [ ] **yoga.html** · you have rewritten most of this. "Come as you are" and "Who finds their way here" are still mine.
- [ ] **about.html** · corrected for Bali and the timeline. The rest of the story is my draft from your CV.
- [ ] **index.html** · your copy, apart from the four service card descriptions.
- [ ] Read the five legal pages once and confirm you are happy to be bound by them.

## 2. Facts to confirm

- [ ] **NDIS price limit.** The 2026-27 counselling line item appears to sit near $156 an hour, below your $170 private rate. Check the current NDIS Pricing Arrangements so a plan manager cannot query an invoice. The site says invoices follow the current pricing arrangements, which covers you either way.
- [ ] **Support at Home.** Confirm $120 per hour indirect activity and nil participant contribution are still correct, since both are now published.
- [ ] **Friday Class.** House of Habits, Witt Street, Torquay, Fridays 10 to 11am, $15. Still right?
- [ ] **ABN or registered trading name** for the legal pages, if you want it shown.
- [x] Email: admin@morethancounselling.com throughout.
- [x] Phone: not published anywhere. Enquiry form and email only.
- [x] Rebates: no Medicare and no private health rebate. All rebate wording removed from private, referrals-fees, terms, cancellation and privacy.
- [x] NDIS category: counselling is a Capacity Building support under Improved Daily Living. Improved Health and Wellbeing was wrong and is corrected.
- [x] Location: Hervey Bay throughout, not Fraser Coast.

## 3. Assets

- [x] Imagery on every page. Therapy space on Private, Urangan Pier on NDIS, the conversation over coffee on Support at Home, the studio floor and your singing bowl portrait on Yoga, the daybed portrait on Contact.
- [x] Badge wall removed from About. Credentials now read as a single written list with insurance, supervision and screening added.
- [x] Favicon: the MTC circle monogram stays.
- [ ] Optional: a photo for the About story, if you ever want one there.

## 4. Check before you upload

- [ ] Open all thirteen pages and click every link, including the eight in the footer.
- [ ] Open the site on your phone. Check the hamburger opens, closes, and that Book Now is readable in both the dark and the scrolled state.
- [ ] On contact.html, confirm the Splose enquiry form loads and submits.
- [ ] Click Book a Session from a few different pages and confirm Splose opens.
- [ ] Scroll each page and check the menu stays readable everywhere it passes over an image or a colour band.

## 5. Go live

- [ ] Go to app.netlify.com/drop and drag the unzipped folder in.
- [ ] Open the temporary Netlify URL and click through the whole site again.
- [ ] Domain management, add morethancounselling.com and www.morethancounselling.com.
- [ ] Update the DNS records at your registrar as Netlify instructs.
- [ ] Wait for the SSL certificate to issue, usually under an hour. Do not share the link until the padlock shows.
- [ ] Test morethancounselling.com/contact and /yoga directly. Redirects are already in netlify.toml so the printed QR codes cannot 404.

## 6. After launch

- [ ] **Google Search Console.** Add the property and submit https://www.morethancounselling.com/sitemap.xml. This is the single highest value thing on this list.
- [ ] **Google Business Profile** for Hervey Bay. For a local practice this usually does more than everything else combined. Categories: Counselor, Mental health service, Yoga studio.
- [ ] Scan the QR codes on both printed brochures and confirm they land where they should.
- [ ] Post a link to the site somewhere social and check the share card renders, showing the hero image and your logo rather than a grey box.
- [ ] Update your Splose booking page and email signature to the new URL.
- [ ] Tell your referrers the Support at Home page exists. It is the one page on the site that was previously invisible online, and it is the page a coordinator needs.
- [ ] Note for a reprint: your trifold says "breath and attention as practice." The site now says "presence."

---

## Where things live

| What | Where |
|---|---|
| All pages | the site folder, plain .html files |
| Images, logos, linen texture, share card | `images/` |
| Netlify settings and brochure redirects | `netlify.toml` |
| Search engine files | `sitemap.xml`, `robots.txt` |
| Button colour, one value for the whole site | `--cta` at the top of each page's styles |
| Booking widget | Splose, linked from every Book a Session button |
| Enquiry form | Splose, embedded on contact.html |

## Facts now published, so keep them true

Individual counselling 50 minutes at $170, or $220 for 90 minutes · Family counselling $170 per session · Yoga privates $170 per hour · Friday Class $15 · Support at Home indirect activity $120 per hour, nil participant contribution · no Medicare and no private health rebates · NDIS Capacity Building, Improved Daily Living · ACA registration R88444 · Hervey Bay, in home, and online across Australia.
