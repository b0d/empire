import "./index.css";
import Image from "next/image";
import ContentScreen from "../../components/ContentScreen/index";
import { useTranslations } from "next-intl";

export default function Ladies() {
	const z = useTranslations();

	return (
		<article>
			<div className='container ladies-screen d-flex flex-column justify-content-around '>
				<ContentScreen textNeeded='5' />
				<div className='d-flex flex-row flex-wrap'>
					<div className='col-12 col-sm-12 col-md-6 col-xl-4 lady-block'>
						<figure>
							<a href={"/girls/" + z("Ladies.lady.0.id")}>
								<Image
									loading='lazy'
									src={z("Ladies.lady.0.facePic")}
									height={300}
									width={300}
									alt={z("Ladies.lady.0.alt")}
									className='photo-lady'
								/>

								<figcaption>
									<div className='slider_name'>{z("Ladies.lady.0.name")}</div>
								</figcaption>
							</a>
						</figure>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-xl-4 lady-block'>
						<figure>
							<a href={"/girls/" + z("Ladies.lady.1.id")}>
								<Image
									loading='lazy'
									src={z("Ladies.lady.1.facePic")}
									height={300}
									width={300}
									alt={z("Ladies.lady.1.alt")}
									className='photo-lady'
								/>

								<figcaption>
									<div className='slider_name'>{z("Ladies.lady.1.name")}</div>
								</figcaption>
							</a>
						</figure>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-xl-4 lady-block'>
						<figure>
							<a href={"/girls/" + z("Ladies.lady.2.id")}>
								<Image
									loading='lazy'
									src={z("Ladies.lady.2.facePic")}
									height={300}
									width={300}
									alt={z("Ladies.lady.2.alt")}
									className='photo-lady'
								/>

								<figcaption>
									<div className='slider_name'>{z("Ladies.lady.2.name")}</div>
								</figcaption>
							</a>
						</figure>
					</div>
				</div>
			</div>
		</article>
	);
}
/*const z = useTranslations("Ladies");

	return (
		<article className='container ladies-screen d-flex flex-column justify-content-around '>
			<ContentScreen textNeeded='5' />
			<div className='d-flex flex-row flex-wrap'>
				<div className='col-4 lady-block'>
					<figure>
						<a
							href={"/girls/" + z("id1")}
							data-toggle='modal'
							data-target='#servise-modal1'
						>
							<Image
								loading='lazy'
								src={z("facePic")}
								height={300}
								width={300}
								alt={z("alt1")}
								className='photo-lady'
							/>

							<figcaption>
								<div className='slider_name'>{z("name1")}</div>
							</figcaption>
						</a>
					</figure>
				</div>
				<div className='col-4 lady-block'>
					<figure>
						<a
							href={"/girls/" + z("id2")}
							data-toggle='modal'
							data-target='#servise-modal1'
						>
							<Image
								loading='lazy'
								src={z("facePic")}
								height={300}
								width={300}
								alt={z("alt2")}
								className='photo-lady'
							/>

							<figcaption>
								<div className='slider_name'>{z("name2")}</div>
							</figcaption>
						</a>
					</figure>
				</div>
				<div className='col-4 lady-block'>
					<figure>
						<a
							href={"/girls/" + z("id3")}
							data-toggle='modal'
							data-target='#servise-modal1'
						>
							<Image
								loading='lazy'
								src={z("facePic")}
								height={300}
								width={300}
								alt={z("alt3")}
								className='photo-lady'
							/>

							<figcaption>
								<div className='slider_name'>{z("name3")}</div>
							</figcaption>
						</a>
					</figure>
				</div>
			</div>
		</article>
	);*/
