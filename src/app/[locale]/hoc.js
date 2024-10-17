// hoc/withTranslations.js
export function withTranslations(PageComponent) {
    // Це HOC для додавання перекладів до компонента
    const WithTranslations = (props) => <PageComponent {...props} />;

    return WithTranslations;
}

export const getStaticProps = async ({ locale }) => {
    // Тут імпортуємо повідомлення для відповідної локалі
    const messages = await import(`../../../messages/${locale}.json`).then((module) => module.default);

    return {
        props: {
            messages,
        },
    };
};