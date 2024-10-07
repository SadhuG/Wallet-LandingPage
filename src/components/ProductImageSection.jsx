import productImage from "../assets/productImage.png";

export const ProductImageSection = () => {
	return (
		<section className="px-5 py-14 min-[500px]:px-12 lg:p-24">
			<div className="">
				<img
					src={productImage}
					alt=""
				/>
			</div>
		</section>
	);
};
