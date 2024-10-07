import { Dialog, DialogPanel } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Logo } from "../assets/Logo";

function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<nav className="flex px-5 py-8 justify-between">
				<div className="">
					<a href="#">
						<Logo />
					</a>
				</div>
				<div className="flex items-center lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className=""
					>
						<MenuIcon className="h-6 w-6" />
					</button>
				</div>

				<div className="hidden lg:flex lg:gap-8">
					<a
						href="#"
						className="flex items-center"
					>
						Sign up
					</a>
					<a
						href="#"
						className="bg-purple rounded-2xl px-14 py-2 text-darkGray"
					>
						Log in
					</a>
				</div>
			</nav>

			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-50 w-[80vw]" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-[70vw] overflow-hidden bg-primaryGray px-5 py-8 sm:max-w-sm sm:ring-1 sm:ring-white20">
					<div className="flex items-center py-2 justify-end">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<XIcon
								aria-hidden="true"
								className="h-6 w-6"
							/>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="flex flex-col items-center py-6 gap-4">
								<a
									href="#"
									className="flex align-middle"
								>
									Sign up
								</a>
								<a
									href="#"
									className="bg-purple rounded-2xl px-14 py-2 text-darkGray"
								>
									Log in
								</a>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</>
	);
}
export default Navbar;
