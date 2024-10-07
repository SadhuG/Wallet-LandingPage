import purse2 from "../assets/purse2.png";

export const ContactSection = () => {
	return (
		<section className="px-5 py-14 md:p-24">
			<div className="flex justify-between flex-col md:flex-row gap-10 md:gap-20  items-center">
				<div className="flex flex-col gap-10">
					<div className="flex flex-col gap-7 text-center md:text-left">
						<p className="text-[40px] leading-normal font-semibold">
							Questions?
							<br /> Let&apos;s talk
						</p>
						<p className="text-white40">
							Contact us through our 24/7 live chat. We’re always happy to help!
						</p>
					</div>

					<div className="flex justify-center md:justify-start">
						<button className="py-2 px-9 rounded-2xl bg-yellow text-darkGray">
							Reach Us
						</button>
					</div>
				</div>

				<div className="flex items-center">
					<img
						src={purse2}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};
