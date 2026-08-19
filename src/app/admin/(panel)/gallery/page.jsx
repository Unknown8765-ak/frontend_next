import GalleryGrid from "../../../../components/admin/Gallery/GalleryGrid";

const Gallery = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Gallery Management
        </h1>

        <p className="text-gray-500 mt-2">
          Upload and manage all website images from one place.
        </p>
      </div>

      <GalleryGrid />
    </div>
  );
};

export default Gallery;