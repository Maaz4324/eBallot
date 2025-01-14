/* AUTH ROUTES
 * @collapse
 *
 */

import { Router, Request, Response } from 'express'
import {
  loginUser,
  registerUser,
  forgotPassword,
  resetPassword,
  verifyEmail,
  resendVerificationEmail,
  verifyEmailToken,
  resetPasswordToken,
} from '../controllers/auth.controller'
import loginFormValidation from '../middleware/loginFormValidation'
import registerFormValidation from '../middleware/registerFormValidation'

const router = Router()

// * [AUTH] - /api/auth
//     * [POST] - /api/auth/login
//     * [POST] - /api/auth/register
//     * [POST] - /api/auth/forgot-password
//     * [POST] - /api/auth/reset-password
//     * [POST] - /api/auth/verify-email
//     * [POST] - /api/auth/resend-verification-email
//     * [GET] - /api/auth/verify-email/:token
//     * [GET] - /api/auth/reset-password/:token

router.get('/login', loginFormValidation, loginUser)
router.post('/register', registerFormValidation, registerUser)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)
router.post('/verify-email', verifyEmail)
router.post('/resend-verification-email', resendVerificationEmail)
router.get('/verify-email/:token', verifyEmailToken)
router.get('/reset-password/:token', resetPasswordToken)

export default router
