import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/app/components/HomePage';
import Demo1 from '@/app/components/Demo1';
import Demo2 from '@/app/components/Demo2';
import DemoVintage from '@/app/components/DemoVintage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo1" element={<Demo1 />} />
        <Route path="/demo2" element={<Demo2 />} />
        <Route path="/vintage" element={<DemoVintage />} />
      </Routes>
    </BrowserRouter>
  );
}
