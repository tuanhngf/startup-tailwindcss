import React from 'react';
export default function Footer() {
	return (
		<footer className=' border-t-2 dark:border-primary-50/5'>
			<div className='p-4 container'>
				<div className='flex items-center justify-center md:justify-between gap-4'>
					<p className='text-sub'>2023 © Startup. All rights reserved.</p>
					<a className='tuanhngf' href='https://www.tuanhngf.dev/' target='_blank' rel='noopener noreferrer'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={24} height={24}>
							<path d='M15.5,6c-1.378,0-2.5,1.122-2.5,2.5s1.122,2.5,2.5,2.5,2.5-1.122,2.5-2.5-1.122-2.5-2.5-2.5Zm0,4c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5,.673,1.5,1.5-.673,1.5-1.5,1.5ZM24,2.544c0-1.403-1.142-2.544-2.559-2.544-5.16,.147-9.295,2.269-12.889,6.645-1.62,.019-3.237,.412-4.686,1.139-1.722,.865-3.09,2.169-3.661,3.488-.359,.83-.264,1.828,.247,2.605,.469,.713,1.2,1.122,2.006,1.122h2.541c1.326,0,2.335,.337,2.999,1.001,.683,.683,1.001,1.604,1.001,2.899v2.541c0,.824,.441,1.605,1.18,2.091,.473,.311,1.007,.47,1.535,.47,.347,0,.69-.068,1.012-.208,1.319-.57,2.624-1.938,3.488-3.661,.727-1.448,1.12-3.065,1.139-4.686,4.376-3.593,6.498-7.73,6.645-12.903ZM1.289,13.329c-.328-.5-.391-1.135-.165-1.66,.48-1.11,1.673-2.229,3.191-2.991,1.066-.535,2.233-.87,3.421-.987-.105,.141-.21,.284-.314,.43-1.603,2.235-2.861,4.969-3.262,5.879h-1.701c-.464,0-.89-.245-1.17-.671Zm14.034,6.355c-.763,1.519-1.881,2.711-2.991,3.191-.494,.215-1.107,.144-1.602-.18-.463-.305-.729-.762-.729-1.255v-1.693c.923-.382,3.649-1.571,5.879-3.171,.145-.104,.288-.209,.43-.314-.117,1.188-.452,2.355-.987,3.421Zm-.026-3.919c-1.873,1.343-4.178,2.412-5.3,2.897-.041-1.439-.465-2.543-1.29-3.369-.812-.812-1.972-1.245-3.45-1.29,.516-1.128,1.637-3.428,2.979-5.3C11.893,3.601,16.098,1.153,21.456,1c.852,0,1.544,.693,1.544,1.53-.153,5.372-2.601,9.577-7.704,13.235ZM1.732,18.732c-.604,.603-1.461,2.702-1.701,3.752-.096,.418,.029,.849,.332,1.152,.236,.236,.549,.363,.874,.363,.093,0,.186-.01,.279-.032,1.05-.24,3.148-1.097,3.752-1.701,.473-.472,.732-1.1,.732-1.768s-.26-1.296-.732-1.768c-.943-.944-2.592-.944-3.535,0Zm2.828,2.828c-.391,.391-2.223,1.194-3.268,1.433-.111,.025-.188-.029-.222-.064-.035-.035-.09-.11-.064-.222,.239-1.045,1.042-2.877,1.433-3.268,.283-.283,.66-.439,1.061-.439s.777,.156,1.061,.439,.439,.66,.439,1.061-.156,.777-.439,1.061Z' />
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
}
