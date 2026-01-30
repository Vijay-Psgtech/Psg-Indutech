import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import BacktoTop from "./components/BacktoTOp";
import Loader from "./components/Loader";

const Layout = lazy(() => import("./components/Layout"));
const HomePage = lazy(() => import("./components/HomePage"));
const PsgCoEAbout = lazy(() => import("./pages/about/PsgCoEAbout"));
const TrainingPage = lazy(() => import("./pages/trainingFacility/TrainingPage"));
const Products = lazy(() => import("./pages/products/Products"));
const IncubationPrototype = lazy(() => import("./pages/facilities/IncubationPrototype"));
const ProductDevelopment = lazy(() => import("./pages/facilities/ProductDevelopment"));
const Testing = lazy(() => import("./pages/testingFacility/Testing"));
const CommericalProduction = lazy(() => import("./pages/facilities/CommericalProduction"));
const HotMeltLamination = lazy(() => import("./pages/facilities/HotMeltLamination"));
const ResourceCenterCapabilities = lazy(() => import("./pages/facilities/ResourceCenter"));
const GalleryAlbum = lazy(() => import("./pages/gallery/GalleryAlbum"));
const AlbumPage = lazy(() => import("./pages/gallery/AlbumPage"));
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
            <Route path="/psg-coe-about" element={<PsgCoEAbout />} />
            <Route path="/products" element={<Products />} />
            <Route path="/inc-pro" element={<IncubationPrototype />} />
            <Route path="/prod-dev" element={<ProductDevelopment />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/comm-prod" element={<CommericalProduction />} />
            <Route path="/hot-melt" element={<HotMeltLamination />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/res-center" element={<ResourceCenterCapabilities />} />
            <Route path="/gallery" element={<GalleryAlbum />} />
            <Route path="/gallery/:id" element={<AlbumPage />} />
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
