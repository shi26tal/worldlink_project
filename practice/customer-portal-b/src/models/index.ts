import { Plan } from "./plan.model.js";
import { User } from "./user.model.js";

User.hasOne(Plan);
Plan.belongsTo(User);

export { User, Plan };
