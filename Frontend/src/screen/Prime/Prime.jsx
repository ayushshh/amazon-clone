import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PlayCircleOutlined from '@mui/icons-material/PlayCircleOutlined';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

/* ── Benefit data ── */
const benefits = [
    {
        icon: <LocalShippingOutlinedIcon sx={{ fontSize: 40 }} />,
        title: 'Free & Fast Delivery',
        desc: 'FREE Same-Day, One-Day and Two-Day Delivery on eligible orders',
        color: '#00A8E1',
    },
    {
        icon: <PlayCircleOutlined sx={{ fontSize: 40 }} />,
        title: 'Prime Video',
        desc: 'Watch exclusive movies, web series & TV shows anytime, anywhere',
        color: '#00A8E1',
    },
    {
        icon: <MusicNoteIcon sx={{ fontSize: 40 }} />,
        title: 'Prime Music',
        desc: 'Ad-free music streaming with 100 million songs & podcasts',
        color: '#00A8E1',
    },
    {
        icon: <MenuBookIcon sx={{ fontSize: 40 }} />,
        title: 'Prime Reading',
        desc: 'Access thousands of books, magazines & comics for free',
        color: '#00A8E1',
    },
    {
        icon: <FlashOnIcon sx={{ fontSize: 40 }} />,
        title: 'Early Access to Deals',
        desc: 'Shop Lightning Deals 30 minutes before everyone else',
        color: '#00A8E1',
    },
    {
        icon: <HeadphonesIcon sx={{ fontSize: 40 }} />,
        title: 'Ad-free Audible Channels',
        desc: 'Listen to podcasts and Audible Channels without ads',
        color: '#00A8E1',
    },
    {
        icon: <SportsEsportsIcon sx={{ fontSize: 40 }} />,
        title: 'Prime Gaming',
        desc: 'Free in-game content, free games & Twitch channel subscription',
        color: '#00A8E1',
    },
    {
        icon: <PhotoCameraIcon sx={{ fontSize: 40 }} />,
        title: 'Amazon Photos',
        desc: 'Unlimited photo storage with 5 GB free for videos',
        color: '#00A8E1',
    },
];

/* ── Plans data ── */
const plans = [
    {
        label: 'Monthly',
        price: '₹299',
        per: '/month',
        badge: null,
        features: [
            'All Prime benefits',
            'Cancel anytime',
            'Auto-renews monthly',
        ],
    },
    {
        label: 'Quarterly',
        price: '₹459',
        per: '/3 months',
        badge: 'Save 49%',
        features: [
            'All Prime benefits',
            'Cancel anytime',
            '₹153/month effectively',
        ],
    },
    {
        label: 'Annual',
        price: '₹1,499',
        per: '/year',
        badge: 'Best Value',
        features: [
            'All Prime benefits',
            'Cancel anytime',
            '₹125/month effectively',
        ],
    },
];

/* ── FAQ data ── */
const faqs = [
    {
        q: 'What is Amazon Prime?',
        a: 'Amazon Prime is a paid subscription programme that gives you access to a wide range of exclusive benefits including fast and free delivery, Prime Video, Prime Music, Prime Reading, and much more — all for one low price.',
    },
    {
        q: 'How much does Amazon Prime cost?',
        a: 'Amazon Prime is available at ₹299/month, ₹459/3 months, or ₹1,499/year. You can cancel at any time.',
    },
    {
        q: 'Is there a free trial available?',
        a: 'Yes! New members can try Amazon Prime free for 30 days. After your free trial, you will be automatically charged the subscription fee unless you cancel.',
    },
    {
        q: 'What delivery benefits do I get with Prime?',
        a: 'Prime members get FREE Same-Day Delivery, FREE One-Day Delivery, and FREE Two-Day Delivery on millions of eligible items. No minimum order value required.',
    },
    {
        q: 'Can I cancel my Prime membership?',
        a: 'Yes, you can cancel your Amazon Prime membership at any time. If you cancel within 3 business days of signing up or within 3 business days of your annual renewal, you will receive a full refund.',
    },
    {
        q: 'How do I access Prime Video?',
        a: 'Prime Video is included with your Amazon Prime membership at no extra cost. You can watch on the Amazon website, the Prime Video app, Smart TVs, mobile phones, tablets, and more.',
    },
];

/* ── FAQ Item ── */
function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-[#ddd]">
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex justify-between items-center py-[14px] px-[20px] text-left text-[15px] font-medium text-[#0F1111] hover:bg-[#f7f7f7] transition-colors"
            >
                <span>{q}</span>
                {open
                    ? <ExpandLessIcon sx={{ fontSize: 20, color: '#555' }} />
                    : <ExpandMoreIcon sx={{ fontSize: 20, color: '#555' }} />
                }
            </button>
            {open && (
                <div className="px-[20px] pb-[16px] text-[14px] text-[#555] leading-[22px]">
                    {a}
                </div>
            )}
        </div>
    );
}

/* ══════════════════════════════════════════
   MAIN PRIME PAGE
══════════════════════════════════════════ */
export default function Prime() {
    return (
        <div className="bg-white font-[Arial,Helvetica,sans-serif] min-h-screen">

            {/* ── HERO ── */}
            <div
                className="w-full py-[50px] px-[20px] flex flex-col items-center text-center"
                style={{
                    background: 'linear-gradient(180deg, #0F1111 0%, #131921 40%, #1a2b3c 100%)',
                }}
            >
                {/* Prime Logo */}
                <div className="flex items-center gap-[6px] mb-[6px]">
                    <span className="text-white text-[36px] font-bold tracking-tight">amazon</span>
                    <span
                        className="text-[28px] font-bold px-[10px] py-[2px] rounded-[4px] tracking-wider"
                        style={{
                            background: 'linear-gradient(135deg, #00A8E1 0%, #0066c0 100%)',
                            color: 'white',
                        }}
                    >
                        prime
                    </span>
                </div>

                <p className="text-[#8ACDEE] text-[14px] mb-[24px] tracking-wide uppercase font-medium">
                    Shopping Plans starting ₹399/year
                </p>

                <h1 className="text-white text-[28px] md:text-[36px] font-bold mb-[10px] leading-tight max-w-[640px]">
                    Everything you love about Amazon,{' '}
                    <span style={{ color: '#00A8E1' }}>even better.</span>
                </h1>

                <p className="text-[#ccc] text-[16px] mb-[32px] max-w-[520px] leading-[24px]">
                    Fast deliveries, award-winning movies & TV shows, ad-free music, and much more — all in one membership.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-[12px] items-center">
                    <button
                        className="px-[28px] py-[10px] text-[15px] font-bold rounded-[100px] cursor-pointer transition-all"
                        style={{
                            background: 'linear-gradient(135deg, #f7dfa5 0%, #f0c14b 100%)',
                            border: '1px solid #a88734',
                            color: '#0F1111',
                        }}
                        onMouseEnter={e => e.target.style.background = 'linear-gradient(135deg, #f5d78e 0%, #e9b920 100%)'}
                        onMouseLeave={e => e.target.style.background = 'linear-gradient(135deg, #f7dfa5 0%, #f0c14b 100%)'}
                    >
                        Try Prime FREE for 30 days
                    </button>
                    <button
                        className="px-[28px] py-[10px] text-[15px] font-medium rounded-[100px] cursor-pointer border border-[#8ACDEE] text-[#8ACDEE] hover:border-white hover:text-white transition-all"
                        style={{ background: 'transparent' }}
                    >
                        Get Prime membership
                    </button>
                </div>

                <p className="text-[#8ACDEE] text-[12px] mt-[16px]">
                    ₹1,499/year after free trial. Cancel anytime.
                </p>
            </div>

            {/* ── BENEFITS STRIP ── */}
            <div
                className="w-full py-[12px] px-[20px]"
                style={{ background: 'linear-gradient(90deg, #0066c0 0%, #00A8E1 100%)' }}
            >
                <div className="max-w-[1100px] mx-auto flex flex-wrap justify-center gap-x-[32px] gap-y-[4px]">
                    {['Free Delivery', 'Prime Video', 'Prime Music', 'Prime Reading', 'Early Access Deals', 'Prime Gaming'].map((b) => (
                        <div key={b} className="flex items-center gap-[6px] text-white text-[13px] font-medium">
                            <CheckIcon sx={{ fontSize: 16 }} />
                            {b}
                        </div>
                    ))}
                </div>
            </div>

            {/* ── BENEFITS GRID ── */}
            <div className="max-w-[1100px] mx-auto py-[50px] px-[20px]">
                <h2 className="text-center text-[24px] font-bold text-[#0F1111] mb-[8px]">
                    One membership, many benefits
                </h2>
                <p className="text-center text-[14px] text-[#555] mb-[36px]">
                    Explore everything Prime has to offer
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
                    {benefits.map((b) => (
                        <div
                            key={b.title}
                            className="flex flex-col items-center text-center p-[20px] rounded-[8px] border border-[#eee] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:border-[#00A8E1] transition-all cursor-pointer group"
                        >
                            <div
                                className="w-[64px] h-[64px] rounded-full flex items-center justify-center mb-[14px] group-hover:scale-110 transition-transform"
                                style={{ background: 'linear-gradient(135deg, #e8f4fb 0%, #cce8f8 100%)', color: '#0066c0' }}
                            >
                                {b.icon}
                            </div>
                            <h3 className="text-[14px] font-bold text-[#0F1111] mb-[6px]">{b.title}</h3>
                            <p className="text-[12px] text-[#555] leading-[18px]">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── PRIME VIDEO BANNER ── */}
            <div
                className="w-full py-[50px] px-[20px]"
                style={{ background: 'linear-gradient(135deg, #0F1111 0%, #1a2b3c 100%)' }}
            >
                <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-[40px]">
                    <div className="flex-1 text-white">
                        <div className="flex items-center gap-[8px] mb-[16px]">
                            <PlayCircleOutlined sx={{ fontSize: 32, color: '#00A8E1' }} />
                            <span className="text-[20px] font-bold">Prime Video</span>
                        </div>
                        <h2 className="text-[28px] font-bold mb-[12px] leading-tight">
                            Award-winning movies & TV shows
                        </h2>
                        <p className="text-[#ccc] text-[15px] leading-[24px] mb-[20px]">
                            Watch exclusive Amazon Originals like The Family Man, Mirzapur, Panchayat and more. New content added every week.
                        </p>
                        <div className="flex flex-wrap gap-[8px]">
                            {['Amazon Originals', 'Bollywood', 'Hollywood', 'Web Series', 'Kids'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-[12px] py-[4px] text-[12px] rounded-[100px] border border-[#00A8E1] text-[#00A8E1]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Mock video thumbnails */}
                    <div className="flex-1 grid grid-cols-3 gap-[8px]">
                        {[
                            { title: 'The Family Man', color: '#1a3a5c' },
                            { title: 'Mirzapur', color: '#3a1a1a' },
                            { title: 'Panchayat', color: '#1a3a2a' },
                            { title: 'Tandav', color: '#2a1a3a' },
                            { title: 'Breathe', color: '#3a2a1a' },
                            { title: 'Four More Shots', color: '#1a2a3a' },
                        ].map((show) => (
                            <div
                                key={show.title}
                                className="aspect-[2/3] rounded-[6px] flex items-end p-[8px] cursor-pointer hover:scale-105 transition-transform"
                                style={{ background: `linear-gradient(180deg, ${show.color} 0%, #000 100%)` }}
                            >
                                <span className="text-white text-[10px] font-medium leading-tight">{show.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── PRICING PLANS ── */}
            <div className="max-w-[1100px] mx-auto py-[50px] px-[20px]">
                <h2 className="text-center text-[24px] font-bold text-[#0F1111] mb-[8px]">
                    Choose your Prime plan
                </h2>
                <p className="text-center text-[14px] text-[#555] mb-[36px]">
                    All plans include the same Prime benefits
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                    {plans.map((plan) => (
                        <div
                            key={plan.label}
                            className={`relative flex flex-col rounded-[8px] border-[2px] p-[28px] transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] ${plan.badge === 'Best Value'
                                ? 'border-[#00A8E1] shadow-[0_4px_16px_rgba(0,168,225,0.2)]'
                                : 'border-[#ddd]'
                                }`}
                        >
                            {plan.badge && (
                                <div
                                    className="absolute -top-[13px] left-1/2 -translate-x-1/2 px-[14px] py-[4px] text-[12px] font-bold rounded-[100px] text-white whitespace-nowrap"
                                    style={{ background: plan.badge === 'Best Value' ? '#00A8E1' : '#e07b22' }}
                                >
                                    {plan.badge}
                                </div>
                            )}
                            <h3 className="text-[18px] font-bold text-[#0F1111] mb-[4px]">{plan.label}</h3>
                            <div className="flex items-baseline gap-[4px] mb-[20px]">
                                <span className="text-[32px] font-bold text-[#0F1111]">{plan.price}</span>
                                <span className="text-[14px] text-[#555]">{plan.per}</span>
                            </div>
                            <ul className="flex flex-col gap-[10px] mb-[24px] flex-1">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-[8px] text-[14px] text-[#333]">
                                        <CheckIcon sx={{ fontSize: 16, color: '#00A8E1', marginTop: '2px', flexShrink: 0 }} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="w-full py-[9px] text-[14px] font-bold rounded-[4px] border cursor-pointer transition-all"
                                style={
                                    plan.badge === 'Best Value'
                                        ? {
                                            background: 'linear-gradient(135deg, #f7dfa5 0%, #f0c14b 100%)',
                                            border: '1px solid #a88734',
                                            color: '#0F1111',
                                        }
                                        : {
                                            background: 'transparent',
                                            border: '1px solid #0066c0',
                                            color: '#0066c0',
                                        }
                                }
                            >
                                Get Prime {plan.label}
                            </button>
                        </div>
                    ))}
                </div>

                <p className="text-center text-[12px] text-[#767676] mt-[16px]">
                    All prices are inclusive of applicable taxes. Cancel anytime.
                </p>
            </div>

            {/* ── PRIME MUSIC BANNER ── */}
            <div
                className="w-full py-[48px] px-[20px]"
                style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d0a5c 100%)' }}
            >
                <div className="max-w-[800px] mx-auto flex flex-col md:flex-row items-center gap-[32px] text-white text-center md:text-left">
                    <div
                        className="w-[80px] h-[80px] rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #7b2ff7 0%, #a855f7 100%)' }}
                    >
                        <MusicNoteIcon sx={{ fontSize: 40 }} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-[22px] font-bold mb-[6px]">Prime Music</h2>
                        <p className="text-[#ccc] text-[14px] leading-[22px]">
                            Stream 100 million songs completely ad-free. Download music for offline listening. Available on any device.
                        </p>
                    </div>
                    <button
                        className="flex-shrink-0 px-[24px] py-[8px] text-[14px] font-bold rounded-[100px] border border-[#a855f7] text-[#a855f7] hover:bg-[#a855f7] hover:text-white transition-all cursor-pointer"
                        style={{ background: 'transparent' }}
                    >
                        Listen Free
                    </button>
                </div>
            </div>

            {/* ── FAQ ── */}
            <div className="max-w-[800px] mx-auto py-[50px] px-[20px]">
                <h2 className="text-center text-[24px] font-bold text-[#0F1111] mb-[8px]">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-[14px] text-[#555] mb-[28px]">
                    Got questions? We've got answers.
                </p>
                <div className="border border-[#ddd] rounded-[8px] overflow-hidden">
                    {faqs.map((faq) => (
                        <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                </div>
            </div>

            {/* ── BOTTOM CTA ── */}
            <div
                className="w-full py-[50px] px-[20px] text-center"
                style={{ background: 'linear-gradient(180deg, #131921 0%, #0F1111 100%)' }}
            >
                <h2 className="text-white text-[26px] font-bold mb-[10px]">
                    Start your Prime membership today
                </h2>
                <p className="text-[#ccc] text-[15px] mb-[24px]">
                    Try free for 30 days. Cancel anytime.
                </p>
                <button
                    className="px-[36px] py-[12px] text-[15px] font-bold rounded-[100px] cursor-pointer transition-all"
                    style={{
                        background: 'linear-gradient(135deg, #f7dfa5 0%, #f0c14b 100%)',
                        border: '1px solid #a88734',
                        color: '#0F1111',
                    }}
                >
                    Try Prime FREE for 30 days
                </button>
                <p className="text-[#767676] text-[12px] mt-[12px]">
                    ₹1,499/year after free trial. No commitments, cancel anytime.
                </p>
            </div>

        </div>
    );
}
