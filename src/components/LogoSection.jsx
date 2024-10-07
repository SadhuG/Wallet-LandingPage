import Logos from "../assets/Logos.png";
import LogosSmall from "../assets/LogosSmall.png";

export const LogoSection = () => {
	return (
		<section className="flex justify-center px-8">
			<div className="flex justify-center max-w-5xl py-12 border-y border-white20">
				<img
					className="hidden sm:block"
					src={Logos}
					alt=""
				/>
				<img
					className="sm:hidden"
					src={LogosSmall}
					alt=""
				/>
			</div>
		</section>
	);
};
