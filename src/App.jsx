import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import BacktoTop from "./components/BacktoTop";
import Loader from "./components/Loader";

const Layout = lazy(() => import("./components/Layout"));
const HomePage = lazy(() => import("./components/HomePage"));
const PsgCoEAbout = lazy(() => import("./pages/about/PsgCoEAbout"));

const Testing = lazy(() => import("./pages/testingFacility/Testing"));
const TrainingPage = lazy(() => import("./pages/trainingFacility/TrainingPage"));
const ResourceCenterCapabilities = lazy(() => import("./pages/resourceCenter/ResourceCenter"));
const ProductDevelopment = lazy(() => import("./pages/productDevelopment/ProductDevelopment"));
const Products = lazy(() => import("./pages/products/Products"));
const GalleryAlbum = lazy(() => import("./pages/gallery/GalleryAlbum"));
const AlbumPage = lazy(() => import("./pages/gallery/AlbumPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactUs"));

const LaminatingMachine = lazy(() => import("./pages/commericalProd/LaminatingMachine"));
const ThermalBonding = lazy(() => import("./pages/commericalProd/ThermalWadding"));
const NeedlePunchingMachine = lazy(() => import("./pages/commericalProd/NeedlePunchingMachine"));
const WipesManufacturing = lazy(() => import("./pages/commericalProd/WipesManufacturing"));
const UVPrinting = lazy(() => import("./pages/commericalProd/UvPrinting"));
const CoirNeedleFeltLine = lazy(() => import("./pages/commericalProd/CoirNeedleFeltLine"));
const CompositeMfg = lazy(() => import("./pages/commericalProd/CompositeMfg"));

const DiloNeedleMachine = lazy(() => import("./pages/incubation/diloNeedleMachine"));
const PilotScaleMachines = lazy(() => import("./pages/incubation/PilotScaleMachines"));
const FaceMask = lazy(() => import("./pages/incubation/FaceMask"));

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

            <Route path="/testing" element={<Testing />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/resource-center" element={<ResourceCenterCapabilities />} />
            <Route path="/product-development" element={<ProductDevelopment />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/gallery" element={<GalleryAlbum />} />
            <Route path="/gallery/:id" element={<AlbumPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/hot-melt-coating" element={<LaminatingMachine />} />
            <Route path="/thermal-wadding" element={<ThermalBonding />} />
            <Route path="/needle-punch" element={<NeedlePunchingMachine />} />
            <Route path="/wet-wipe" element={<WipesManufacturing />} />
            <Route path="/uv-print" element={<UVPrinting />} />
            <Route path="/coir-needle" element={<CoirNeedleFeltLine />} />
            <Route path="/composite-manufacturing" element={<CompositeMfg />} />

            <Route path="/dilo-needle-machine" element={<DiloNeedleMachine />} />
            <Route path="/pilot-scale-machines" element={<PilotScaleMachines />} />
            <Route path="/face-mask" element={<FaceMask />} />

            <Route path="*" element={<Page404 />} />
            
            </Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
