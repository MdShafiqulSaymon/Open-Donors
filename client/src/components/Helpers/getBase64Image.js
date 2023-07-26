const getBase64Image = (url) => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "Anonymous";

		img.onload = () => {
			const canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;

			const ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0);

			const dataURL = canvas.toDataURL("image/jpeg"); // You can use "image/png" for PNG images
			resolve(dataURL.split(",")[1]);
		};

		img.onerror = () => reject(new Error("Error loading image."));
		img.src = url;
	});
};
export default getBase64Image;
