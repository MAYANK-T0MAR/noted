import FeedBox from "@/components/layout/feed";
import FeedHeader from "@/components/layout/feedHeader";
import RightSidebar from "@/components/layout/rightbar";
import SideBar from "@/components/layout/sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-4">

        {/* Sidebar */}
        <aside className="col-span-3 hidden lg:block">
          <SideBar />
        </aside>

        {/* Feed */}
        <section className="col-span-12 lg:col-span-6 pb-5">
          <FeedHeader />
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
