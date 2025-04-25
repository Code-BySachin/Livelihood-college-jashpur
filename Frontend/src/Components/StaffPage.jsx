import Staff from "./Staff";

function StaffPage() {
    return (
        <div className="flex flex-col gap-8 px-4 py-6 md:px-8 md:py-10">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Admin Section */}
                <section className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center mb-4">Admin</h1>
                    <Staff />
                </section>

                {/* Trainer Section */}
                <section className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center mb-4">Trainer</h1>
                    <Staff />
                </section>
            </div>
        </div>
    );
}

export default StaffPage;