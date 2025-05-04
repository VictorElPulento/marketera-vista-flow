
import { useState } from 'react';
import { Calendar, Grid3X3 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample calendar data
const calendarItems = [
  {
    id: 1,
    date: '2025-05-12',
    title: 'EraWatch Pro Launch',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=300&h=300',
    type: 'Product Launch',
    description: 'Our revolutionary health-focused smartwatch hits the market.',
  },
  {
    id: 2,
    date: '2025-05-15',
    title: 'Smart Home Masterclass',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=300&h=300',
    type: 'Webinar',
    description: 'Learn how to build the ultimate connected home ecosystem.',
  },
  {
    id: 3,
    date: '2025-05-18',
    title: 'Summer Tech Preview',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&h=300',
    type: 'Blog Post',
    description: 'Discover what MarketEra has in store for this summer.',
  },
  {
    id: 4,
    date: '2025-05-22',
    title: 'EraConnect App Update',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=300',
    type: 'Software Update',
    description: 'Major revamp with new features and improved performance.',
  },
  {
    id: 5,
    date: '2025-05-25',
    title: 'Smart Living Podcast #42',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&h=300',
    type: 'Podcast',
    description: 'Interview with home automation expert Sarah Chen.',
  },
  {
    id: 6,
    date: '2025-05-30',
    title: 'Flash Sale: Smart Speakers',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=300&h=300',
    type: 'Promotion',
    description: '24-hour sale with up to 40% off our entire speaker lineup.',
  },
];

// View options
type ViewMode = 'grid' | 'calendar';

const ContentCalendar = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <section className="py-20 container mx-auto container-padding">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-marketera-blue-dark">Content Calendar</h2>
          <p className="text-marketera-gray mt-2">Stay updated with our upcoming events and releases</p>
        </div>
        
        <div className="flex items-center gap-2 mt-6 md:mt-0 bg-marketera-gray-light p-1 rounded-lg">
          <button 
            onClick={() => setViewMode('grid')} 
            className={`p-2 rounded-md flex items-center gap-2 ${
              viewMode === 'grid' 
                ? 'bg-white shadow-sm text-marketera-blue-dark' 
                : 'text-marketera-gray hover:text-marketera-blue-dark'
            }`}
          >
            <Grid3X3 className="w-5 h-5" />
            <span className="text-sm font-medium">Grid View</span>
          </button>
          
          <button 
            onClick={() => setViewMode('calendar')} 
            className={`p-2 rounded-md flex items-center gap-2 ${
              viewMode === 'calendar' 
                ? 'bg-white shadow-sm text-marketera-blue-dark' 
                : 'text-marketera-gray hover:text-marketera-blue-dark'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Calendar View</span>
          </button>
        </div>
      </div>
      
      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {calendarItems.map((item) => (
            <div key={item.id} className="marketera-card group hover:translate-y-[-5px] cursor-pointer">
              <div className="relative mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow-md">
                  <p className="text-sm font-bold text-marketera-blue-dark">{formatDate(item.date)}</p>
                </div>
                <div className="absolute top-3 right-3 bg-marketera-blue px-3 py-1 rounded-full shadow-md">
                  <p className="text-xs font-medium text-white">{item.type}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-marketera-blue-dark mb-2 group-hover:text-marketera-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-marketera-gray mb-4">{item.description}</p>
              <Link to="#" className="text-marketera-blue font-medium text-sm flex items-center hover:underline">
                Set Reminder
              </Link>
            </div>
          ))}
        </div>
      )}
      
      {/* Calendar View */}
      {viewMode === 'calendar' && (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-marketera-blue-dark text-white p-4">
            <h3 className="text-xl font-bold">May 2025</h3>
          </div>
          
          <div className="grid grid-cols-7 text-center py-2 border-b">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
              <div key={i} className="text-marketera-gray font-medium">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1 p-4">
            {/* Calendar days (example for May 2025) */}
            {/* First row with some April dates */}
            {[...Array(4)].map((_, i) => (
              <div key={`prev-${i}`} className="aspect-square p-1">
                <div className="h-full w-full rounded-md flex items-center justify-center text-marketera-gray opacity-50">
                  {27 + i}
                </div>
              </div>
            ))}
            
            {/* May dates */}
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              // Check if this date has events
              const hasEvent = calendarItems.some(item => new Date(item.date).getDate() === day);
              
              return (
                <div key={`day-${day}`} className="aspect-square p-1">
                  <div 
                    className={`h-full w-full rounded-md flex flex-col items-center justify-center ${
                      hasEvent ? 'bg-marketera-blue-dark text-white' : 'hover:bg-marketera-gray-light'
                    }`}
                  >
                    <span className={`${hasEvent ? 'font-bold' : ''}`}>{day}</span>
                    {hasEvent && (
                      <span className="w-1 h-1 bg-marketera-neon-lime rounded-full mt-1"></span>
                    )}
                  </div>
                </div>
              );
            })}
            
            {/* First few days of June */}
            {[...Array(1)].map((_, i) => (
              <div key={`next-${i}`} className="aspect-square p-1">
                <div className="h-full w-full rounded-md flex items-center justify-center text-marketera-gray opacity-50">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
          
          {/* Events list for calendar view */}
          <div className="border-t p-4">
            <h4 className="font-semibold text-marketera-blue-dark mb-4">Upcoming Events</h4>
            <div className="space-y-4">
              {calendarItems.slice(0, 4).map((item) => (
                <div key={item.id} className="flex gap-4 p-2 hover:bg-marketera-gray-light rounded-lg transition-colors">
                  <div className="w-16 h-16 bg-marketera-gray-light rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-marketera-blue-dark">
                      {new Date(item.date).getDate()}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-marketera-blue bg-marketera-blue bg-opacity-10 px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                    <h4 className="font-bold text-marketera-blue-dark mt-1">{item.title}</h4>
                    <p className="text-xs text-marketera-gray mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContentCalendar;
