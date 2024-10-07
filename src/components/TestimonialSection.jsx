import quoteIcon from "../assets/quoteIcon.png";

export const TestimonialSection = () => {
	return (
		<section className="px-5 py-14 md:px-12 md:py-8 lg:px-24">
			<div className="flex flex-col items-center px-8 py-44 min-[600px]:px-24 sm:py-24 gap-8 rounded-2xl bg-yellowLight">
				<div>
					<img
						src={quoteIcon}
						alt=""
					/>
				</div>

				<div className="flex flex-col gap-16">
					<p className="text-center text-primaryGray">
						“Wallet is a great product! All of my most important information is
						there - credit cards, transit cards, boarding passes, tickets, and
						more. And I don&apos;t need to worry because it&apos;s all in one
						place! thanks!”
					</p>
					<p className="text-center text-primaryGray40">Johnny Owens</p>
				</div>
			</div>
		</section>
	);
};
