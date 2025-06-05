import FeedBox from "@/components/layout/feed";
import RightSidebar from "@/components/layout/rightbar";
import SideBar from "@/components/layout/sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-4">

        {/* Sidebar */}
        <aside className="col-span-3 hidden lg:block">
          <SideBar />
        </aside>

        {/* Feed */}
        <section className="col-span-12 lg:col-span-6 pt-5 pb-5">
          <FeedBox />
        </section>

        {/* Rightbar */}
        <aside className="sticky top-5 col-span-3 hidden lg:block">
          <RightSidebar />
        </aside>
      </div>
    </main>
  );
}
