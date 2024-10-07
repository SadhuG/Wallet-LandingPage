import cardsIcon from "../assets/cardsIcon.png";
import coinIcon from "../assets/coinIcon.png";
import productDisplay from "../assets/productDisplay.png";
import purseIcon from "../assets/purseIcon.png";

export const FeaturesSection = () => {
	const features = [
		{
			id: 1,
			header: "All in one place",
			text: "The right place to keep your credit and debit cards, boarding passes & more.",
			icon: cardsIcon,
		},
		{
			id: 2,
			header: "No payment fee",
			text: "Transfer your payment all over the world with no payment fee.",
			icon: coinIcon,
		},
		{
			id: 3,
			header: "Customizable Cards",
			text: "Custom your own cards for your exact incomes and expenses needs.",
			icon: purseIcon,
		},
	];

	return (
		<section className="px-5 py-14 sm:px-28 sm:py-12">
			<div className="flex justify-between gap-16 items-center max-lg:flex-col">
				<ul className="flex flex-col justify-evenly gap-12">
					{features.map((feature) => {
						return (
							<li
								className="flex gap-8 "
								key={feature.id}
							>
								<div className="flex items-center">
									<img
										className="feature-icon"
										src={feature.icon}
										alt=""
									/>
								</div>

								<div className="w-[20ch] sm:w-[35ch] lg:w-[30ch] gap-2.5">
									<p className="font-bold">{feature.header}</p>
									<p className="text-white40">{feature.text}</p>
								</div>
							</li>
						);
					})}
				</ul>

				<div className="flex items-center">
					<img
						src={productDisplay}
						alt=""
						className="xl:w-[500px] xl:h-[400px]"
					/>
				</div>
			</div>
		</section>
	);
};
