import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/app/components/ScrollToTop';
import HomePage from '@/app/components/HomePage';
import Demo1 from '@/app/components/Demo1';
import Demo2 from '@/app/components/Demo2';
import DemoVintage from '@/app/components/DemoVintage';
import Demo3 from '@/app/components/Demo3';
import Demo4 from '@/app/components/Demo4';
import Demo5 from '@/app/components/Demo5';
import Demo6 from '@/app/components/Demo6';
import Demo7 from '@/app/components/Demo7';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo1" element={<Demo1 />} />
        <Route path="/demo2" element={<Demo2 />} />
        <Route path="/vintage" element={<Demo3 />} />
        <Route path="/demo3" element={<Demo3 />} />
        <Route path="/demo4" element={<Demo4 />} />
        <Route path="/demo5" element={<Demo5 />} />
        <Route path="/demo6" element={<Demo6 />} />
        <Route path="/demo7" element={<Demo7 />} />
      </Routes>
    </BrowserRouter>
  );
}
