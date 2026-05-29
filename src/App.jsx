import React, { useState } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import ShopView from './components/ShopView';
import StoryView from './components/StoryView';
import StoresView from './components/StoresView';
import FlavorModal from './components/FlavorModal';
import Footer from './components/Footer';

const FLAVORS = [
  {
    id: 'salted-caramel',
    name: 'Salted Caramel Latte',
    tagline: 'Golden caramel. Soft salt.',
    desc: 'Golden-sweet, buttery caramel balanced with hand-harvested pink salt and dark-roasted Arabica.',
    themeBg: '#E8DCC8',
    image: '/flavors/salted-caramel.png',
    sensory: { sweetness: 70, intensity: 80, creamy: 90 },
    ingredients: 'Single-origin spray-dried Arabica coffee, pure spray-dried date palm powder, full-cream milk solids, mineral-rich Himalayan pink salt. **No artificial preservatives. No stabilizers. No refined sugar.**'
  },
  {
    id: 'french-vanilla',
    name: 'French Vanilla Latte',
    tagline: 'Bold vanilla orchid. Velvet milk.',
    desc: 'Luxurious organic vanilla pods paired with a smooth double-shot espresso profile.',
    themeBg: '#DFD2C0',
    image: '/flavors/french-vanilla.png',
    sensory: { sweetness: 60, intensity: 75, creamy: 95 },
    ingredients: 'Single-origin spray-dried Arabica coffee, pure spray-dried date palm powder, full-cream milk solids, Madagascar vanilla extract. **No artificial preservatives. No stabilizers. No refined sugar.**'
  },
  {
    id: 'hazelnut',
    name: 'Velvet Hazelnut Cappuccino',
    tagline: 'Toasted nut. Frothy espresso.',
    desc: 'Rich, deeply roasted hazelnuts layered into a frothy, bold cappuccino base.',
    themeBg: '#D6C7B7',
    image: '/flavors/hazelnut.jpg',
    sensory: { sweetness: 65, intensity: 85, creamy: 85 },
    ingredients: 'Single-origin spray-dried Arabica coffee, pure spray-dried date palm powder, full-cream milk solids, natural hazelnut extract. **No artificial preservatives. No stabilizers. No refined sugar.**'
  },
  {
    id: 'dark-mocha',
    name: 'Intense Dark Mocha',
    tagline: 'Single-origin cacao. Heavy roast.',
    desc: 'Bittersweet dark cocoa powder blended with heavy-bodied, dark roasted Arabica solids.',
    themeBg: '#CDBCAD',
    image: '/flavors/dark-mocha.jpg',
    sensory: { sweetness: 50, intensity: 90, creamy: 80 },
    ingredients: 'Single-origin spray-dried Arabica coffee, pure spray-dried date palm powder, full-cream milk solids, dark cocoa powder. **No artificial preservatives. No stabilizers. No refined sugar.**'
  },
  {
    id: 'irish-cream',
    name: 'Irish Cream Cappuccino',
    tagline: 'Vanilla barrel. Silky warmth.',
    desc: 'Warm cream, vanilla-orchid extract, and toasted oak notes without the alcohol.',
    themeBg: '#C4B2A4',
    image: '/flavors/irish-cream.jpg',
    sensory: { sweetness: 70, intensity: 70, creamy: 90 },
    ingredients: 'Single-origin spray-dried Arabica coffee, pure spray-dried date palm powder, full-cream milk solids, natural Irish cream flavouring. **No artificial preservatives. No stabilizers. No refined sugar.**'
  }
];

const STORES = [
  {
    name: 'REDEFINED Flagship',
    address: 'Carter Road, Bandra West, Mumbai',
    hours: '8:00 AM - 11:00 PM',
    status: 'Open Now',
    tastingBar: true,
    pinX: '28%',
    pinY: '42%'
  },
  {
    name: 'REDEFINED Bar',
    address: '100ft Road, Indiranagar, Bengaluru',
    hours: '8:00 AM - 11:00 PM',
    status: 'Open Now',
    tastingBar: true,
    pinX: '38%',
    pinY: '75%'
  },
  {
    name: 'REDEFINED Espresso',
    address: 'DLF CyberHub, Phase 3, Gurgaon',
    hours: '8:00 AM - 11:00 PM',
    status: 'Open Now',
    tastingBar: true,
    pinX: '45%',
    pinY: '25%'
  },
  {
    name: 'REDEFINED Spot',
    address: 'Road No. 36, Jubilee Hills, Hyderabad',
    hours: '8:00 AM - 10:00 PM',
    status: 'Open Now',
    tastingBar: true,
    pinX: '58%',
    pinY: '60%'
  },
  {
    name: 'REDEFINED Corner',
    address: 'Koregaon Park, Lane 6, Pune',
    hours: '8:00 AM - 10:00 PM',
    status: 'Open Now',
    tastingBar: true,
    pinX: '65%',
    pinY: '48%'
  }
];

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (flavor) => {
    setSelectedFlavor(flavor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFlavor(null);
  };

  return (
    <>
      <Header 
        activeView={activeView} 
        setActiveView={setActiveView} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      <main className="main-content" id="spa-container">
        <HomeView active={activeView === 'home'} setActiveView={setActiveView} />
        
        <ShopView 
          active={activeView === 'shop'} 
          flavors={FLAVORS} 
          onOpenModal={handleOpenModal} 
        />
        
        <StoryView active={activeView === 'story'} />
        
        <StoresView 
          active={activeView === 'stores'} 
          stores={STORES} 
          selectedStore={selectedStore} 
          setSelectedStore={setSelectedStore} 
        />
      </main>

      <FlavorModal 
        isOpen={isModalOpen} 
        flavor={selectedFlavor} 
        onClose={handleCloseModal} 
      />

      <Footer activeView={activeView} setActiveView={setActiveView} />
    </>
  );
}
