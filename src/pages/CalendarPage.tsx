
import ContentCalendar from "@/components/calendar/ContentCalendar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CalendarPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ContentCalendar />
      </main>
      <Footer />
    </div>
  );
};

export default CalendarPage;
