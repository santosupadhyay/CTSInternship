export default function Footer() {
  return (
    <div className="bg-gray-900 text-white text-center py-4 bottom-0 right-0 left-0 w-full fixed">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CTS Dhangadhi. All rights reserved.
        </p>
    </div>
  );
}
