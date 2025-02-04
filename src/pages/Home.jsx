import React from 'react';
import { Header, Container, Button } from '../components';
import { Link } from 'react-router-dom';
import BG from '../assets/BG.png';
import target from '../assets/target.png';
import tasks from '../assets/tasks.png';
import ai from '../assets/ai.png';
import chart from '../assets/chart.png';

const Home = () => {
	return (
		<div>
			<Header />
			<section
				className='min-h-[90vh] pt-30 bg-bottom bg-contain bg-no-repeat'
				style={{ backgroundImage: `url(${BG})` }}
			>
				<Container>
					<div className='text-center'>
						<h1 className='text-4xl md:text-5xl md:mt-28'>
							Achieve Big Goals, One Step at a Time
						</h1>
						<p className='text-center md:w-1/3 mx-auto mt-4'>
							Turn Ambition into Action with AI-Powered Goal
							Breakdown
						</p>
						<Button
							textColor='text-black'
							border='border-none'
							className='mx-auto mt-8'
							type='link'
							to=''
						>
							Take the First Step Today 🚀
						</Button>
					</div>
				</Container>
			</section>

			<section className='mt-20' id='howitworks'>
				<h2 className='text-center text-3xl'>🔥 How StepWise Works</h2>
				<div className='mt-8'>
					<Container>
						<div className='py-8 columns-2 border-white/10 border-t-2 border-b-2'>
							<div className='text-2xl'>
								<span className='mr-4'>01</span>Set Your Goal
							</div>
							<div className='text-white/30 font-medium'>
								Whether it’s fitness, learning a skill, or a
								personal project, start with your big goal.
							</div>
						</div>
						<div className='py-8 columns-2 border-white/10 border-b-2'>
							<div className='text-2xl'>
								<span className='mr-4'>02</span>AI Breaks It
								Down
							</div>
							<div className='text-white/30 font-medium'>
								Whether it’s fitness, learning a skill, or a
								personal project, start with your big goal.
							</div>
						</div>
						<div className='py-8 columns-2 border-white/10 border-b-2'>
							<div className='text-2xl'>
								<span className='mr-4'>03</span>Track & Stay
								Consistent
							</div>
							<div className='text-white/30 font-medium'>
								Whether it’s fitness, learning a skill, or a
								personal project, start with your big goal.
							</div>
						</div>
						<div className='py-8 columns-2 border-white/10 border-b-2'>
							<div className='text-2xl'>
								<span className='mr-4'>04</span>Achieve & Grow
							</div>
							<div className='text-white/30 font-medium'>
								Whether it’s fitness, learning a skill, or a
								personal project, start with your big goal.
							</div>
						</div>

						<div className='mt-4 text-center p-4 bg-white/10 rounded-md'>
							"Success is the product of daily habits — not
							once-in-a-lifetime transformations." — Atomic Habits
						</div>
					</Container>
				</div>
			</section>

			<section className='mt-20'>
				<Container>
					<h2 className='text-center text-3xl'>
						Why Choose StepWise?
					</h2>
					<div className='mt-8 px-4 grid grid-rows-2 grid-cols-3 gap-4'>
						<div className='relative overflow-hidden h-90 col-span-1 bg-white/10 p-4 rounded-xl border-2 border-white/10'>
							<h3 className='text-2xl'>Streak & Habit Tracker</h3>
							<p className='text-white/50'>
								No more feeling lost; we help you break big
								goals into clear steps.
							</p>
							<img
								className='absolute -left-30 -bottom-20'
								src={target}
								alt=''
							/>
						</div>

						<div className='relative overflow-hidden h-90 col-span-2 bg-white/10 p-4 rounded-xl border-2 border-white/10'>
							<h3 className='text-2xl'>
								Structured Goal-Setting
							</h3>
							<p className='text-white/50'>
								Stay consistent with visual streaks and
								reminders.
							</p>
							<img
								className='w-[50%] absolute -bottom-120 left-[70%] translate-[-50%]'
								src={tasks}
								alt=''
							/>
						</div>

						<div className='relative overflow-hidden h-90 col-span-2 bg-white/10 p-4 rounded-xl border-2 border-white/10'>
							<h3 className='text-2xl'>AI-Powered Assistance</h3>
							<p className='text-white/50'>
								Get smart task recommendations based on best
								practices.
							</p>
							<img
								className='w-[50%] absolute -bottom-90 left-[50%] translate-[-50%]'
								src={ai}
								alt=''
							/>
						</div>

						<div className='relative overflow-hidden h-90 col-span-1 bg-white/10 p-4 rounded-xl border-2 border-white/10'>
							<h3 className='text-2xl'>Progress Analytics</h3>
							<p className='text-white/50'>
								See your growth with charts and insights.
							</p>
							<img
								className='w-[80%] absolute -bottom-30 left-[50%] translate-[-50%]'
								src={chart}
								alt=''
							/>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default Home;
