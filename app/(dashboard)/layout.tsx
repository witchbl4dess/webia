import Navbar from "@/components/basic/navbar";

const DashboardLayout = ({ 
    children 
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <div>
                    hello sidebar
                </div>
            </div>
            <main className="md:pl-72">
                hello content
                <Navbar />
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;