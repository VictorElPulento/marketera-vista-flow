
import AbandonedCart from "@/components/cart/AbandonedCart";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CartPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AbandonedCart />
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
