import React, { useState } from 'react';
import AmazonLogo from '../../assets/amazonLogo.png';
import { useNavigate, Link } from 'react-router-dom';

/* ─────────────────────────────────────────────
   Shared input style
───────────────────────────────────────────── */
const inputClass =
    'border border-[#a6a6a6] rounded-[3px] h-[31px] px-[7px] text-[13px] w-full focus:outline-none focus:border-[#e77600] focus:shadow-[0_0_0_3px_rgba(228,121,17,0.5)]';

/* ─────────────────────────────────────────────
   SIGN IN
───────────────────────────────────────────── */
export function SignIn() {
    const navigate = useNavigate();
    const [form, setForm]   = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.username || !form.password) {
            setError('Please fill in all fields.');
            return;
        }
        const users = JSON.parse(localStorage.getItem('amazon_users') || '[]');
        const user  = users.find(
            (u) => u.username === form.username && u.password === form.password
        );
        if (!user) {
            setError('Incorrect username or password. Please try again.');
            return;
        }
        localStorage.setItem('amazon_current_user', JSON.stringify(user));
        navigate('/');
    };

    return (
        <div className="bg-white min-h-screen flex flex-col items-center pt-8 pb-16 font-[Arial,sans-serif]">

            {/* Logo */}
            <img src={AmazonLogo} alt="Amazon" className="w-[100px] mb-5 cursor-pointer" style={{ filter: 'brightness(0)' }} onClick={() => navigate('/')} />

            {/* Card */}
            <div className="w-[350px] border border-[#a6a6a6] rounded-[4px] p-[22px] flex flex-col">
                <h1 className="text-[28px] font-normal mb-5">Sign in</h1>

                {/* Error */}
                {error && (
                    <div className="bg-[#fdf4f4] border-l-4 border-[#c40000] rounded-[4px] p-3 mb-4 text-[13px] text-[#c40000]">
                        ⚠ {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="flex flex-col gap-1">
                        <label className="text-[13px] font-bold">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            className={inputClass}
                            autoComplete="username"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center">
                            <label className="text-[13px] font-bold">Password</label>
                            <span className="text-[12px] text-[#007185] cursor-pointer hover:text-[#c7511f] hover:underline">
                                Forgot password?
                            </span>
                        </div>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className={inputClass}
                            autoComplete="current-password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#f0c14b] border border-[#a88734] rounded-[3px] h-[31px] text-[13px] font-medium cursor-pointer hover:bg-[#ddb347] active:bg-[#c9a031] transition-colors"
                    >
                        Continue
                    </button>
                </form>

                <p className="text-[11px] text-[#555] mt-4 leading-relaxed">
                    By continuing, you agree to Amazon's{' '}
                    <span className="text-[#007185] cursor-pointer hover:underline">Conditions of Use</span>{' '}
                    and{' '}
                    <span className="text-[#007185] cursor-pointer hover:underline">Privacy Notice</span>.
                </p>
            </div>

            {/* Divider */}
            <div className="w-[350px] flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-[#e7e7e7]" />
                <span className="text-[12px] text-[#767676] whitespace-nowrap">New to Amazon?</span>
                <div className="flex-1 h-px bg-[#e7e7e7]" />
            </div>

            {/* Create account button */}
            <Link
                to="/signup"
                className="w-[350px] flex justify-center items-center border border-[#a6a6a6] rounded-[4px] h-[31px] text-[13px] text-black bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] hover:bg-[#e7e9ec] no-underline transition-colors"
            >
                Create your Amazon account
            </Link>
        </div>
    );
}

/* ─────────────────────────────────────────────
   SIGN UP
───────────────────────────────────────────── */
export function SignUp() {
    const navigate = useNavigate();
    const [form, setForm]   = useState({ name: '', username: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.username || !form.password || !form.confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }
        if (form.password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('amazon_users') || '[]');
        if (users.find((u) => u.username === form.username)) {
            setError('Username already exists. Please choose another.');
            return;
        }

        const newUser = { name: form.name, username: form.username, password: form.password };
        users.push(newUser);
        localStorage.setItem('amazon_users', JSON.stringify(users));
        localStorage.setItem('amazon_current_user', JSON.stringify(newUser));
        navigate('/');
    };

    return (
        <div className="bg-white min-h-screen flex flex-col items-center pt-8 pb-16 font-[Arial,sans-serif]">

            {/* Logo */}
            <img src={AmazonLogo} alt="Amazon" className="w-[100px] mb-5 cursor-pointer" style={{ filter: 'brightness(0)' }} onClick={() => navigate('/')} />

            {/* Card */}
            <div className="w-[350px] border border-[#a6a6a6] rounded-[4px] p-[22px] flex flex-col">
                <h1 className="text-[28px] font-normal mb-5">Create account</h1>

                {/* Error */}
                {error && (
                    <div className="bg-[#fdf4f4] border-l-4 border-[#c40000] rounded-[4px] p-3 mb-4 text-[13px] text-[#c40000]">
                        ⚠ {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="flex flex-col gap-1">
                        <label className="text-[13px] font-bold">Your name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="First and last name"
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[13px] font-bold">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            className={inputClass}
                            autoComplete="username"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[13px] font-bold">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="At least 6 characters"
                            value={form.password}
                            onChange={handleChange}
                            className={inputClass}
                            autoComplete="new-password"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[13px] font-bold">Re-enter password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className={inputClass}
                            autoComplete="new-password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#f0c14b] border border-[#a88734] rounded-[3px] h-[31px] text-[13px] font-medium cursor-pointer hover:bg-[#ddb347] active:bg-[#c9a031] transition-colors"
                    >
                        Continue
                    </button>
                </form>

                <p className="text-[11px] text-[#555] mt-4 leading-relaxed">
                    By creating an account, you agree to Amazon's{' '}
                    <span className="text-[#007185] cursor-pointer hover:underline">Conditions of Use</span>{' '}
                    and{' '}
                    <span className="text-[#007185] cursor-pointer hover:underline">Privacy Notice</span>.
                </p>

                {/* Already have account */}
                <div className="border-t border-[#e7e7e7] mt-5 pt-4 text-[13px]">
                    Already have an account?{' '}
                    <Link to="/signin" className="text-[#007185] hover:text-[#c7511f] hover:underline no-underline">
                        Sign in ›
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;