import db from '../models';
export const edit_pro_file = (req, res) => {
    console.log('herererer')
    const {
        id="",
        username="",
        email="",
        password="",
        create_datetime="",
        i_m_a="",
        i_m_looking_for="",
        age="",
        first_name="",
        date_of_birth="",
        im_a="",
        state_province="",
        city="",
        hair_color="",
        eye_color="",
        height="",
        weight="",
        body_type="",
        Your_ethnicity_is_mostly="",
        I_consider_my_appearance_as="",
        do_you_drink="",
        do_you_smoke="",
        eating_habbit="",
        marital_status="",
        Do_you_have_children="",
        number_of_children="",
        oldest_child="",
        youngest_child="",
        Do_you_want_more_children="",
        occupation="",
        employement_status="",
        annual_income="",
        change_currency="",
        living_situation="",
        willing_to_relocate="",
        relationship_you_are_looking_for="",
        education="",
        language_spoken="",
        religion="",
        born_reverted="",
        religious_value="",
        attend_religious_service="",
        read_Quran="",
        polygamy="",
        family_value="",
        profile_creator="",
        your_profile_heading="",
        a_little_about_yourself="",
        what_you_are_looking_for_in_a_partner="",
        _query_type=""
    } = req.body;

    db.sequelize
        .query(`CALL editprofile(:_query_type, :id, :username, :email, :password, :i_m_a, 
            :i_m_looking_for, :age, :first_name, :date_of_birth, :im_a, :state_province, :city, :hair_color, :eye_color, 
            :height, :weight, :body_type, :Your_ethnicity_is_mostly, :I_consider_my_appearance_as, :do_you_drink, 
            :do_you_smoke, :eating_habbit, :marital_status, :Do_you_have_children, :Do_you_want_more_children, 
            :oldest_child, :youngest_child, :occupation, :employement_status, :annual_income, :living_situation, 
            :willing_to_relocate, :relationship_you_are_looking_for, :education, 
            :language_spoken, :religion, :born_reverted, :religious_value, :attend_religious_service, :read_Quran, 
            :polygamy, :family_value, :profile_creator, :your_profile_heading, :a_little_about_yourself, 
            :what_you_are_looking_for_in_a_partner, :number_of_children, :change_currency,:create_datetime)`, {
            replacements: { _query_type,
                id,
                username,
                email,
                password,
                create_datetime,
                i_m_a,
                i_m_looking_for,
                age,
                first_name,
                date_of_birth,
                im_a,
                state_province,
                city,
                hair_color,
                eye_color,
                height,
                weight,
                body_type,
                Your_ethnicity_is_mostly,
                I_consider_my_appearance_as,
                do_you_drink,
                do_you_smoke,
                eating_habbit,
                marital_status,
                Do_you_have_children,
                number_of_children,
                oldest_child,
                youngest_child,
                Do_you_want_more_children,
                occupation,
                employement_status,
                annual_income,
                change_currency,
                living_situation,
                willing_to_relocate,
                relationship_you_are_looking_for,
                education,
                language_spoken,
                religion,
                born_reverted,
                religious_value,
                attend_religious_service,
                read_Quran,
                polygamy,
                family_value,
                profile_creator,
                your_profile_heading,
                a_little_about_yourself,
                what_you_are_looking_for_in_a_partner
            },
        })
        .then((results) => res.json({ results }))
        .catch((err) => {
            console.log(err)
            res.status(500).json({ err })
        });
};
