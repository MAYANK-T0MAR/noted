import FeedBox from "@/components/layout/feed";
import FeedHeader from "@/components/layout/feedHeader";
import RightSidebar from "@/components/layout/rightbar";
import SideBar from "@/components/layout/sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-400">
      <div className="bg-background grid grid-cols-12 gap-4 max-w-7xl mx-auto px-4">

        {/* Sidebar */}
        <aside className="col-span-3 hidden lg:block">
          <SideBar />
        </aside>

        {/* Feed */}
        <section className="bg-background col-span-12 lg:col-span-6 pb-5">
          <FeedHeader />
          <FeedBox />
        </section>

        {/* Rightbar */}
        <aside className="bg-background sticky top-5 col-span-3 hidden lg:block">
          <RightSidebar />
        </aside>
      </div>
    </main>
  );
}
