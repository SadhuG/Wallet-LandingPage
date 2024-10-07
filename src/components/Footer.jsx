import { Logo } from "../assets/Logo";

export const Footer = () => {
	const footerMenuList = [
		{ key: 1, text: "Privacy policy" },
		{ key: 2, text: "Cookies policy" },
		{ key: 3, text: "Terms of use" },
	];

	return (
		<footer className="px-12">
			<div className="flex max-[940px]:flex-col gap-10 justify-between py-12 border-t border-white20">
				<div>
					<Logo />
				</div>
				<div className="flex gap-10 max-md:flex-col max-md:gap-5">
					<p>© Wallet 2024</p>
					{footerMenuList.map((item) => {
						return (
							<a
								key={item.key}
								href=""
								className="footer-menu-link"
							>
								{item.text}
							</a>
						);
					})}
				</div>
			</div>
		</footer>
	);
};
