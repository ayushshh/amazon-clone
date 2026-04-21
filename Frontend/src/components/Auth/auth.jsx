import React, { useState } from 'react';
import axios from 'axios';
import AmazonLogo from '../../assets/amazonLogo.png';
import { useNavigate, Link } from 'react-router-dom';

/* ─────────────────────────────────────────────
   Base API URL
───────────────────────────────────────────── */
const API_BASE = 'http://localhost:5000/api/v1/user';

/* ─────────────────────────────────────────────
   Shared styles (mirrors real Amazon)
───────────────────────────────────────────── */
const inputClass =
    'w-full h-[31px] px-[7px] text-[13px] border border-[#a6a6a6] rounded-[3px] bg-white ' +
    'focus:outline-none focus:border-[#e77600] focus:shadow-[0_0_0_3px_rgba(228,121,17,0.5)]';

const labelClass = 'block text-[13px] font-bold mb-[2px]';

const btnPrimary =
    'w-full h-[29px] px-[10px] text-[13px] font-normal rounded-[3px] border cursor-pointer ' +
    'bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] border-[#a88734] shadow-[0_1px_0_rgba(255,255,255,.4)_inset] ' +
    'hover:bg-gradient-to-b hover:from-[#f5d78e] hover:to-[#e9b920] active:from-[#f0c14b] active:to-[#daa520] ' +
    'transition-all disabled:opacity-60 disabled:cursor-not-allowed';

/* ─────────────────────────────────────────────
   Spinner
───────────────────────────────────────────── */
function Spinner() {
    return (
        <svg
            className="inline-block w-3 h-3 mr-1 animate-spin text-[#555]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
    );
}

/* ─────────────────────────────────────────────
   Shared Page Shell
───────────────────────────────────────────── */
function AuthShell({ children }) {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white flex flex-col items-center font-[Arial,Helvetica,sans-serif] pb-16">
            {/* Logo */}
            <img
                src={AmazonLogo}
                alt="Amazon"
                className="w-[100px] my-5 cursor-pointer"
                style={{ filter: 'brightness(0)' }}
                onClick={() => navigate('/')}
            />
            {children}

            {/* Footer divider */}
            <div className="w-full mt-8">
                <div className="relative flex items-center">
                    <div className="flex-1 h-px"
                        style={{ background: 'linear-gradient(to right, transparent, #c7c7c7, transparent)' }}
                    />
                </div>
                <div className="flex justify-center gap-6 mt-3 text-[12px]">
                    <a href="#" className="text-[#007185] hover:text-[#c7511f] hover:underline">Conditions of Use</a>
                    <a href="#" className="text-[#007185] hover:text-[#c7511f] hover:underline">Privacy Notice</a>
                    <a href="#" className="text-[#007185] hover:text-[#c7511f] hover:underline">Help</a>
                </div>
                <p className="text-center text-[12px] text-[#555] mt-2">
                    © 1996–2024, Amazon.com, Inc. or its affiliates
                </p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Error Box
───────────────────────────────────────────── */
function ErrorBox({ msg }) {
    if (!msg) return null;
    return (
        <div className="border border-[#c40000] rounded-[4px] px-3 py-2 mb-4 text-[13px] text-[#c40000] flex gap-2 items-start">
            <span className="mt-[1px]">⚠</span>
            <span>{msg}</span>
        </div>
    );
}

/* ═══════════════════════════════════════════
   SIGN IN
═══════════════════════════════════════════ */
export function SignIn() {
    const navigate = useNavigate();
    const [form, setForm]       = useState({ username: '', password: '' });
    const [error, setError]     = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.username || !form.password) { setError('Please fill in all fields.'); return; }

        setLoading(true);
        try {
            const { data } = await axios.post(
                `${API_BASE}/login`,
                { username: form.username, password: form.password },
                { withCredentials: true }
            );
            localStorage.setItem(
                'amazon_current_user',
                JSON.stringify({ name: data.name, username: data.username, token: data.token })
            );
            navigate('/');
        } catch (err) {
            setError(err?.response?.data?.message || 'Incorrect username or password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthShell>
            {/* Card */}
            <div className="w-[348px] border border-[#ddd] rounded-[4px] px-[24px] pt-[14px] pb-[20px]">
                <h1 className="text-[28px] font-normal mb-[6px]">Sign in</h1>

                <ErrorBox msg={error} />

                <form onSubmit={handleSubmit} noValidate>
                    {/* Username */}
                    <div className="mb-[10px]">
                        <label htmlFor="si-username" className={labelClass}>Username</label>
                        <input
                            id="si-username"
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            className={inputClass}
                            autoComplete="username"
                            autoFocus
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-[14px]">
                        <div className="flex justify-between items-baseline mb-[2px]">
                            <label htmlFor="si-password" className={labelClass}>Password</label>
                            <a href="#" className="text-[12px] text-[#007185] hover:text-[#c7511f] hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            id="si-password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className={inputClass}
                            autoComplete="current-password"
                        />
                    </div>

                    {/* Continue button */}
                    <button id="signin-btn" type="submit" disabled={loading} className={btnPrimary}>
                        {loading ? <><Spinner />Signing in…</> : 'Continue'}
                    </button>
                </form>

                {/* Legal */}
                <p className="text-[11px] text-[#555] mt-[12px] leading-[16px]">
                    By continuing, you agree to Amazon's{' '}
                    <a href="#" className="text-[#007185] hover:underline">Conditions of Use</a> and{' '}
                    <a href="#" className="text-[#007185] hover:underline">Privacy Notice</a>.
                </p>

                {/* Keep me signed in */}
                <div className="flex items-start gap-[6px] mt-[12px] text-[12px]">
                    <input type="checkbox" id="keep-signed-in" className="mt-[1px] cursor-pointer" />
                    <label htmlFor="keep-signed-in" className="cursor-pointer leading-tight">Keep me signed in.</label>
                </div>

                {/* Help row */}
                <div className="mt-[14px] pt-[12px] border-t border-[#ddd] text-[12px] text-[#555]">
                    <span className="font-bold text-[#555]">Need help?</span>
                </div>
            </div>

            {/* "New to Amazon?" section */}
            <div className="w-[348px] mt-[22px]">
                <div className="relative flex items-center mb-[14px]">
                    <div className="flex-1 h-px bg-[#e7e7e7]" />
                    <span className="mx-[8px] text-[12px] text-[#767676] whitespace-nowrap bg-white px-1">
                        New to Amazon?
                    </span>
                    <div className="flex-1 h-px bg-[#e7e7e7]" />
                </div>

                <Link
                    to="/signup"
                    id="create-account-link"
                    className={
                        'flex justify-center items-center h-[29px] w-full text-[13px] text-black no-underline rounded-[3px] border ' +
                        'bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] border-[#adb1b8] shadow-[0_1px_0_rgba(255,255,255,.6)_inset] ' +
                        'hover:from-[#e8eaed] hover:to-[#dde0e5] active:from-[#dde0e5] active:to-[#d0d3d9] transition-all'
                    }
                >
                    Create your Amazon account
                </Link>
            </div>
        </AuthShell>
    );
}

/* ═══════════════════════════════════════════
   SIGN UP / CREATE ACCOUNT
═══════════════════════════════════════════ */
export function SignUp() {
    const navigate = useNavigate();
    const [form, setForm]       = useState({ name: '', username: '', password: '', confirmPassword: '' });
    const [error, setError]     = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.username || !form.password || !form.confirmPassword) {
            setError('Please fill in all fields.'); return;
        }
        if (form.password.length < 6) { setError('Password must be at least 6 characters.'); return; }
        if (form.password !== form.confirmPassword) { setError('Passwords do not match.'); return; }

        setLoading(true);
        try {
            const { data } = await axios.post(
                API_BASE,
                { name: form.name, username: form.username, password: form.password },
                { withCredentials: true }
            );
            localStorage.setItem(
                'amazon_current_user',
                JSON.stringify({ name: data.name, username: data.username, token: data.token })
            );
            navigate('/');
        } catch (err) {
            setError(err?.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthShell>
            <div className="w-[348px] border border-[#ddd] rounded-[4px] px-[24px] pt-[14px] pb-[20px]">
                <h1 className="text-[28px] font-normal mb-[6px]">Create account</h1>

                <ErrorBox msg={error} />

                <form onSubmit={handleSubmit} noValidate>
                    {/* Your name */}
                    <div className="mb-[10px]">
                        <label htmlFor="su-name" className={labelClass}>Your name</label>
                        <input
                            id="su-name"
                            type="text"
                            name="name"
                            placeholder="First and last name"
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass}
                            autoFocus
                        />
                    </div>

                    {/* Username */}
                    <div className="mb-[10px]">
                        <label htmlFor="su-username" className={labelClass}>Username</label>
                        <input
                            id="su-username"
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            className={inputClass}
                            autoComplete="username"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-[10px]">
                        <label htmlFor="su-password" className={labelClass}>Password</label>
                        <input
                            id="su-password"
                            type="password"
                            name="password"
                            placeholder="At least 6 characters"
                            value={form.password}
                            onChange={handleChange}
                            className={inputClass}
                            autoComplete="new-password"
                        />
                        <p className="text-[11px] text-[#555] mt-[3px]">
                            Passwords must be at least 6 characters.
                        </p>
                    </div>

                    {/* Re-enter password */}
                    <div className="mb-[14px]">
                        <label htmlFor="su-confirm" className={labelClass}>Re-enter password</label>
                        <input
                            id="su-confirm"
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className={inputClass}
                            autoComplete="new-password"
                        />
                    </div>

                    {/* Continue button */}
                    <button id="signup-btn" type="submit" disabled={loading} className={btnPrimary}>
                        {loading ? <><Spinner />Creating account…</> : 'Continue'}
                    </button>
                </form>

                {/* Legal */}
                <p className="text-[11px] text-[#555] mt-[12px] leading-[16px]">
                    By creating an account, you agree to Amazon's{' '}
                    <a href="#" className="text-[#007185] hover:underline">Conditions of Use</a> and{' '}
                    <a href="#" className="text-[#007185] hover:underline">Privacy Notice</a>.
                </p>

                {/* Already have account */}
                <div className="mt-[16px] pt-[12px] border-t border-[#e7e7e7] text-[13px]">
                    Already have an account?{' '}
                    <Link to="/signin" className="text-[#007185] hover:text-[#c7511f] hover:underline no-underline">
                        Sign in ›
                    </Link>
                </div>
            </div>
        </AuthShell>
    );
}

export default SignIn;