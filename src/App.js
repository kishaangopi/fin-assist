/* eslint-disable */
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
	Exchanges,
	Homepage,
	News,
	Cryptocurrencies,
	CryptoDetails,
	Navbar,
} from "./components";
import "./App.css";

const App = () => (
	<div className="app">
		<div className="navbar">
			<Navbar />
		</div>
		<div className="main">
			<Layout>
				<div className="routes">
					<Switch>
						<Route exact path="/">
							<Homepage />
						</Route>
						<Route exact path="/exchanges">
							<Exchanges />
						</Route>
						<Route exact path="/cryptocurrencies">
							<Cryptocurrencies />
						</Route>
						<Route exact path="/crypto/:coinId">
							<CryptoDetails />
						</Route>
						<Route exact path="/news">
							<News />
						</Route>
					</Switch>
				</div>
			</Layout>
			<div className="footer">
				<Typography.Title
					level={5}
					style={{ color: "white", textAlign: "center" }}
				>
					Copyright © 2022
					<Link to="/" className="url">
						{" "}
						fin-assist.co
					</Link>{" "}
					All Rights Reserved.
				</Typography.Title>
				<Space>
					<Link to="/" className="footer_link">
						Home
					</Link>
					<Link to="/exchanges" className="footer_link">
						Exchanges
					</Link>
					<Link to="/news" className="footer_link">
						News
					</Link>
					<Link to="/news" className="footer_link">
						Cryptocurrencies
					</Link>
				</Space>
			</div>
		</div>
	</div>
);

export default App;
/* eslint-enable */
