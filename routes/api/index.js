// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const router = require("express").Router();
const userRoutes = require("./users");

// ==============================================================================
// Set Routes
// ==============================================================================

router.use("/users", userRoutes);

// ==============================================================================
// Export Router
// ==============================================================================

module.exports = router;