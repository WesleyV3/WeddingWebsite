
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about-us", "routes/about-us.tsx"),
	route("travel", "routes/travel.tsx"),
	route("schedule", "routes/schedule.tsx"),
	route("registry", "routes/registry.tsx"),
	route("rsvp", "routes/rsvp.tsx"),
	route("faq", "routes/faq.tsx"),
] satisfies RouteConfig;
