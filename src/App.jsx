import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import AtmosphereBand from './components/AtmosphereBand';
import PriceList from './components/PriceList';
import Faq from './components/Faq';
import Map from './components/Map';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import BookingModal from './components/BookingModal';
import OpeningNoticeModal, { STORAGE_KEY as OPENING_NOTICE_KEY } from './components/OpeningNoticeModal';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openingNoticeOpen, setOpeningNoticeOpen] = useState(false);

  const bookingUrl = useMemo(() => 'https://rezervace.dentasoft.cz/demo', []);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(OPENING_NOTICE_KEY) === '1';
      if (!dismissed) setOpeningNoticeOpen(true);
    } catch {
      setOpeningNoticeOpen(true);
    }
  }, []);

  return (
    <>
      <Header onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <Services />
        <About />
        <AtmosphereBand />
        <PriceList onBook={openBooking} />
        <Faq />
        <Map />
      </main>
      <Footer />
      <BackToTop />

      <OpeningNoticeModal open={openingNoticeOpen} onClose={() => setOpeningNoticeOpen(false)} />
      <BookingModal open={bookingOpen} url={bookingUrl} onClose={closeBooking} />
    </>
  );
}

export default App;
