import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function ImagePreview({ image }: { image: File | string | null }) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (image instanceof File) {
      const objectUrl = URL.createObjectURL(image);
      setPreviewUrl(objectUrl);

      // Limpar URL quando o componente desmontar ou a imagem mudar
      return () => URL.revokeObjectURL(objectUrl);
    } else if (typeof image === 'string') {
      setPreviewUrl(image);
    } else {
      setPreviewUrl(null);
    }
  }, [image]);

  if (previewUrl) {
    return (
      <div className="mt-4">
        <Image
          src={previewUrl}
          alt="Preview"
          width={400}
          height={200}
          className="rounded-md border object-cover"
        />
      </div>
    );
  }

  return <div className="w-96 h-52 bg-gray-200 rounded-md border" />;
}

export default ImagePreview;
