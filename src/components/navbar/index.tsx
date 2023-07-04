// export default function Navbar() {
// 	return (
// 		<>
// 			<div className="navbar" role="navigation" aria-label="main navigation">
// 				<div className="navbar-brand">
// 					<a className="navbar-item" href="https://bulma.io">
// 						<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
// 					</a>

import NavbarDropdown from './dropdown';
import NavbarItem from './item';

// 					<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
// 						<span aria-hidden="true"></span>
// 						<span aria-hidden="true"></span>
// 						<span aria-hidden="true"></span>
// 					</a>
// 				</div>

// 				<div id="navbarBasicExample" className="navbar-menu">
// 					<div className="navbar-start">
// 						<a className="navbar-item"> Home </a>

// 						<a className="navbar-item"> Documentation </a>

// 						<div className="navbar-item has-dropdown is-hoverable">
// 							<a className="navbar-link"> More </a>

// 							<div className="navbar-dropdown">
// 								<a className="navbar-item"> About </a>
// 								<a className="navbar-item"> Jobs </a>
// 								<a className="navbar-item"> Contact </a>
// 								<hr className="navbar-divider" />
// 								<a className="navbar-item"> Report an issue </a>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="navbar-end">
// 						<div className="navbar-item">
// 							<div className="buttons">
// 								<a className="button is-primary">
// 									<strong>Sign up</strong>
// 								</a>
// 								<a className="button is-light"> Log in </a>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
export default function Navbar() {
	const isActive = false;
	return (
		<div className="navbarComponent">
			<nav className="navbar has-shadow is-primary mb-2" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="#">
						{/* <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                /> */}
						<h1 className="navbar-logo is-size-4 is-logo">Nikolai</h1>
					</a>

					<a
						role="button"
						className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbar-rollout"
						// onClick={handleBurgerToggle}
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbar-rollout" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
					<div className="navbar-start">
						<NavbarItem label="Home" url="/" />
						<NavbarItem label="NavItem" url="#" />

						<NavbarDropdown label="Dropdown">
							<NavbarItem label="Dropdown" url="#" />
							<NavbarItem label="Dropdown" url="#" />
							<NavbarItem label="Dropdown" url="#" />
						</NavbarDropdown>
					</div>

					<div className="navbar-end">
						<div className="navbar-item mr-3">
							<div className="buttons">
								<a className="button is-primary">
									<strong>Sign up</strong>
								</a>
								<a className="button">Log in</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
