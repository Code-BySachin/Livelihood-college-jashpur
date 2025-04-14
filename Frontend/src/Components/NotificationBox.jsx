import NotificationCard from "./NotificationCard";

// import { Card, CardContent } from "@/components/ui/card";
function NotificationBox() {
  return (
    <>
    {/* Latest Updates & News */ }
    <section className = "p-10 bg-gray-100" >
      <h2 className="text-2xl font-bold text-center text-red-500">Latest Updates & News</h2>
      <div className="mt-6 space-y-4">
       <NotificationCard/>
       <NotificationCard/>
       <NotificationCard/>
       <NotificationCard/>
        
      </div>
    </section >
    </>
    )
}
export default NotificationBox;