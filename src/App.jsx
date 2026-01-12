import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import BacktoTop from "./components/BacktoTOp";
import Loader from "./components/Loader";

const Layout = lazy(() => import("./components/Layout"));
const HomePage = lazy(() => import("./components/HomePage"));
const AboutCoE = lazy(() => import("./pages/about/AboutCoE"));
const PsgCoEAbout = lazy(() => import("./pages/about/PsgCoEAbout"));
const EventsPage = lazy(() => import("./pages/events/EventsPage"));
const Products = lazy(() => import("./pages/products/Products"));
const IncubationPrototype = lazy(() => import("./pages/facilities/IncubationPrototype"));
const ProductDevelopment = lazy(() => import("./pages/facilities/ProductDevelopment"));
const Testing = lazy(() => import("./pages/facilities/Testing"));
const CommericalProduction = lazy(() => import("./pages/facilities/CommericalProduction"));
const HotMeltLamination = lazy(() => import("./pages/facilities/HotMeltLamination"));
const Traning = lazy(() => import("./pages/facilities/Traning"));
const ResourceCenterCapabilities = lazy(() => import("./pages/facilities/ResourceCenter"));
const WebLinks = lazy(() => import("./pages/infoCenter/WebLinks"));
const TextileOrganizations = lazy(() => import("./pages/infoCenter/TextileOrg"));
const TechnicalTextile = lazy(() => import("./pages/infoCenter/TechnicalTextile"));
const GalleryAlbum = lazy(() => import("./pages/gallery/GalleryAlbum"));
const AlbumPage = lazy(() => import("./pages/gallery/AlbumPage"));
const Archives = lazy(() => import("./pages/archives/Archives"));
const ContactPage = lazy(() => import("./pages/contact/ContactUs"));
const Page404 = lazy(() => import("./components/page404"));

const App = () => {
  return (
    <>
      {/*Page routes*/}
      <main className="pt-20">
        <BacktoTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about-coe" element={<AboutCoE />} />
            <Route path="/psg-coe-about" element={<PsgCoEAbout />} />
            <Route path="/all-events" element={<EventsPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/inc-pro" element={<IncubationPrototype />} />
            <Route path="/prod-dev" element={<ProductDevelopment />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/comm-prod" element={<CommericalProduction />} />
            <Route path="/hot_mlc" element={<HotMeltLamination />} />
            <Route path="/training" element={<Traning />} />
            <Route path="/res-center" element={<ResourceCenterCapabilities />} />
            <Route path="/web-links" element={<WebLinks />} />
            <Route path="/textile-org" element={<TextileOrganizations />} />
            <Route path="/technical-textile" element={<TechnicalTextile />} />
            <Route path="/gallery" element={<GalleryAlbum />} />
            <Route path="/gallery/:id" element={<AlbumPage />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/coming-soon" element={<Page404 />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
