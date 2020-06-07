export const STYLE_CSS = `@charset "UTF-8";
i.fa {
    font-size: 14px;
}

.badge {
    padding: 0;
    background: #eb2e51;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    position: absolute;
    right: -12px;
    top: -5px;
    font-size: 9px;
    line-height: 15px;
}

.p-0 {
    padding: 0 !important;
}

.wrapper {
    width: 100%;
    position: relative;
}

.header {
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid #e7ecf0;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1930;
    height: 57px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

    .header .logo {
        /*float: left;
    width: 60px;
    margin-right: 14px;
    margin-top: 13px;*/
        float: left;
        /* width: 109px; */
        margin-right: 14px;
        margin-top: 4px;
    }

    .header .search-bar {
        float: left;
        width: 280px;
        margin-top: 9px;
    }

.search-bar form {
    float: left;
    width: 100%;
    position: relative;
}

    .search-bar form input {
        width: 100%;
        background-color: #fff;
        height: 38px;
        color: #b2b2b2;
        font-size: 12px;
        border: 1px solid #e6ecf0;
        padding: 0 15px;
        border-radius: 20px !important;
    }

    .search-bar form button {
        position: absolute;
        top: 0;
        right: 0;
        background-color: transparent;
        width: 38px;
        height: 100%;
        border: 0;
    }

        .search-bar form button i {
            color: #878787;
            font-size: 16px;
        }

.menu-top {
    float: right;
    width: auto;
    padding-right: 13px;
}

    .menu-btn {
        float: right;
        display: none;
    }

    .menu-btn a {
        font-size: 24px;
        display: inline-block;
        padding-top: 7px;
        padding-left: 20px;
    }

.menu-top ul li {
    display: inline-block;
    text-align: center;
    padding: 18px 13px;
    position: relative;
}

    .menu-top ul li a {
        color: #667580;
        position: relative
    }

.notification-box {
    width: 300px;
    padding: 0;
    box-shadow: none;
    border: 1px solid #e7ecf0;
}


.nt-title {
    float: left;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 20px;
}

    .nt-title h4 {
        float: left;
        color: #686868;
        font-size: 12px;
        font-weight: 600;
    }

    .nt-title > a {
        float: right;
        color: #1da1f2 !important;
        font-size: 12px !important;
        font-weight: 600;
    }

.nott-list {
    float: left;
    width: 100%;
}

.notfication-details {
    float: left;
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #e7ecf0;
}

    .notfication-details:last-child {
        border-bottom: none;
    }

.notification-box.msg .nott-list .notfication-details {
    padding: 17px 20px 17px 20px;
}

.noty-user-img {
    float: left;
    width: 35px;
}

    .noty-user-img img {
        width: 100%;
    }

.nott-list .notification-info {
    width: 80%;
    float: left;
    text-align: left;
    position: relative;
    padding-left: 10px;
}

.notification-info h3 {
    color: #686868;
    font-size: 14px;
    font-weight: 600;
    border: 0;
    padding: 0;
    margin-bottom: 1px;
}

.notification-box p {
    line-height: 16px;
    font-size: 12px;
}

.notification-info > span {
    display: inline-block;
    color: #b2b2b2;
    font-size: 10px;
}

.nott-list .notification-info span {
    position: absolute;
    bottom: 5px;
    right: 0;
}

.notification-box .nott-list .notification-info span {
    bottom: auto;
    top: 5px;
}

.user-account {
    float: right;
    box-sizing: border-box;
    position: relative;
}

.user-info {
    float: left;
    width: 100%;
    padding: 10px;
    position: relative;
}

    .user-info img {
        float: left;
        margin-right: 10px;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        -ms-border-radius: 100px;
        -o-border-radius: 100px;
        border-radius: 100px;
    }

    .user-info a {
        color: #667580;
        font-size: 14px;
        float: left;
        margin-top: 7px;
        margin-right: 5px;
    }

    .user-info > i {
        position: absolute;
        top: 42%;
        color: #667580;
        font-size: 12px;
    }

.user-account-info {
    width: 150px;
    padding: 0;
    margin: 0 !important;
    box-shadow: none;
    border: 1px solid #e7ecf0;
}

.us-links li {
    border-bottom: 1px solid #e7ecf0;
}

    .us-links li:hover {
        background: #e7ecf0;
    }

    .us-links li a {
        color: #667580;
        font-size: 13px;
        padding: 10px 15px;
        display: block;
    }

    .us-links li:hover a {
        color: #003f7e;
    }

.footer {
    padding: 25px 0;
}

.main-content {
    min-height: auto;
    padding-top: 10px;
    margin-top: 57px;
}

.home .post-section .post-ct {
    padding: 0;
}

.image-conver {
    margin-bottom: 15px;
    height: 300px;
    overflow: hidden;
}

    .image-conver img {
        height: 100%;
        object-fit: cover
    }

.box-df {
    background-color: #fff;
    min-height: 20px;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 4px !important;
}

.line-chart {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
}

    .line-chart .item {
        width: 100%;
        color: #707e88;
        font-size: 13px;
        text-align: center
    }

.color-active {
    color: #1da1f2;
}

.line-chart .item .number {
    font-size: 18px;
    margin-right: 10px;
}

.post-bar.post-input {
    color: #9daab5;
    font-size: 14px;
    position: relative;
    border: 0 !important;
}

.post-section .post-bar {
    border-top: 2px solid #e7ecf0;
    padding: 10px 30px;
}

    .post-section .post-bar .img-post {
        height: 350px;
    }

        .post-section .post-bar .img-post img {
            height: 100%;
        }

    .post-section .post-bar .photo-list .photo-data {
        height: 175px;
    }

    .post-section .post-bar .photo-list.media-2 .photo-data {
        height: 350px;
        width: 50%;
    }

    .post-section .post-bar .photo-list .photo-data:first-child {
        height: 350px;
    }

.post-section .post-topbar {
    margin-bottom: 15px;
}

.post-section .post-ct {
    padding: 0 40px;
}

.post-section .post-avatar {
    display: table-cell;
    vertical-align: top;
    padding-right: 10px;
    float: left;
}

.post-avatar-picture img {
    overflow: hidden;
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 100%;
}

.post-section .post-ct .post-descp .desc-title {
    margin-bottom: 15px;
}

.post-section .post-ct .post-descp .title {
    color: #292f33;
    font-size: 14px;
}

.post-section .post-ct .post-status-bar * {
    position: relative;
}

.post-section .post-ct .post-status-bar a {
    display: inline-block;
    min-width: 80px;
}

.post-section .post-ct .post-status-bar {
    padding-top: 15px;
    padding-bottom: 15px;
}

    .post-section .post-ct .post-status-bar span {
        font-size: 12px;
        color: #65737f;
        position: absolute
    }

.post-section .post-meta {
    float: left;
    margin-left: 10px;
}

    .post-section .post-meta .user-popover {
        color: #000;
        font-size: 12px;
        font-weight: 700;
    }

    .post-section .post-meta .post-time {
        color: #8899a6;
        font-size: 13px;
    }

.post-comt-box {
    display: inline-block;
    position: relative;
    width: 100%;
}

    .post-comt-box form textarea {
        background: #f3f3f3 none repeat scroll 0 0;
        border-color: transparent;
        border-radius: 3px;
        color: #000000;
        font-size: 13.5px;
        font-weight: 500;
        min-height: 40px;
        line-height: 16px;
        width: 100%;
        padding: 10px;
        outline: 0;
        resize: none;
    }

    .post-comt-box .edit {
        position: absolute;
        right: 10px;
        top: 10px;
    }

.user-profile .user-fw-status li {
    padding: 15px;
    border-bottom: 1px solid #e7ecf0
}

    .user-profile .user-fw-status li a {
        display: block
    }

        .user-profile .user-fw-status li a > i {
            margin-right: 5px;
        }

.user-profile li a img {
    height: 30px;
    width: 30px;
    margin-top: 0px;
    border-radius: 50%;
    margin-right: 5px;
    vertical-align: middle;
}

.user-profile .username-dt {
    padding: 10px 0;
}

.user-profile .usr-pic {
    width: 110px;
    height: 110px;
    margin: 0 auto;
}

    .user-profile .usr-pic > img {
        border: 5px solid #fff;
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        -ms-border-radius: 100px;
        -o-border-radius: 100px;
        border-radius: 100px;
        width: 100%;
    }

.user-profile .user-specs {
    padding: 0 15px;
}

    .user-profile .user-specs span {
        display: block;
        margin-bottom: 10px;
    }

    .user-profile .user-specs h3 {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .user-profile .user-specs .mail {
        color: #1da1f2;
    }

    .user-profile .user-specs .date i {
        margin-right: 5px;
    }

.user-profile .user-fl {
    padding: 10px 15px;
}

    .user-profile .user-fl li {
        float: left;
        text-align: center;
        border: 1px solid #e7ecf0;
        width: 50%;
        padding: 5px;
    }

        .user-profile .user-fl li:first-child {
            border-right: 0
        }

    .user-profile .user-fl .number {
        color: #1da1f2;
        font-size: 18px;
    }

.friends {
    text-align: justify
}

    .friends li {
        display: inline-block
    }

    .friends .item-friend img {
        overflow: hidden;
        width: 40px;
        height: 40px;
        display: block;
        border-radius: 100%;
    }

.title-link-hed {
    padding-bottom: 10px;
}

    .title-link-hed i {
        margin-right: 5px;
    }

    .title-link-hed .name-0 {
        color: #000;
        font-size: 14px;
        position: relative
    }

    .title-link-hed .name {
        color: #267ec0;
    }

    .title-link-hed .view {
        float: right;
        color: #369ef4;
    }

.photo-list {
    margin: -5px;
    padding-bottom: 3px;
    overflow: hidden
}

    .photo-list .photo-data {
        width: 33.3333333%;
        position: relative;
        padding: 5px;
        overflow: hidden;
        float: left;
    }

        .photo-list .photo-data:first-child {
            width: 66.6666667%;
        }

        .photo-list .photo-data a {
            position: relative;
            padding-bottom: 100%;
            display: block;
            overflow: hidden;
            background: #eee;
            height: 100%;
        }

        .photo-list .photo-data img {
            top: 0;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
            user-select: none;
        }

.post-input textarea.postText {
    border: none;
    padding-top: 12px;
    padding-left: 65px;
    height: 45px;
    box-shadow: none;
    border: none;
    border-radius: 5px;
    resize: none !important;
}

.publisher-box {
    background-color: #fff;
}

.post-input .img-post-input {
    position: absolute;
    left: 35px;
    top: 15px;
    z-index: 22;
}

.post-input .add-emoticons {
    position: absolute;
    bottom: 12px;
    right: 8px;
    margin: 0;
    display: none;
}

.sun_pub_mid_foot {
    margin: 0 10px;
    border-top: 1px solid #e8e8e8;
    padding: 8px 3px;
    display: flex;
    align-items: center;
}

    .sun_pub_mid_foot .poster-left-buttons {
        margin-right: 7px;
        display: flex;
        max-width: calc((493.5px - 75px) / 3);
    }

.pub-focus .sun_pub_mid_foot .poster-left-buttons {
    max-width: 33.3333333333%;
    min-width: 33.3333333333%;
    margin: 0;
}

.sun_pub_mid_foot .poster-left-buttons .btn {
    padding: 0 6px;
    border-radius: 2em;
    height: 32px;
    transition: all 0.15s;
    font-weight: 500;
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 28px;
    background: #f3f3f3;
    position: relative
}

.pub-focus .sun_pub_mid_foot .poster-left-buttons .btn {
    width: 100%;
    margin: 0 5px;
}

.sun_pub_mid_foot .poster-left-buttons .btn img {
    width: 20px;
    height: 20px;
    margin-right: 1px;
    margin-top: -1px;
    border-radius: 3px;
    object-fit: cover;
    vertical-align: middle
}

.btn-file input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    text-align: right;
    opacity: 0;
    outline: 0;
    background: #fff;
    cursor: inherit;
    display: block;
}

.publisher-box .publisher-box-footer {
    padding: 5px;
    display: none;
}

.sun_pub_more {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.sun_pub_more_items {
    flex: 1;
    display: flex;
    justify-content: center;
    margin: 10px 30px;
}

.publisher-box .publisher-box-footer .poster-left-buttons {
    margin: 0 5.3px;
}

    .publisher-box .publisher-box-footer .poster-left-buttons .btn {
        padding: 0;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-weight: 500;
        font-size: 13px;
        position: relative;
        overflow: hidden
    }

.sun_pub_more_items .btn > span {
    width: 38px;
    height: 38px;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f3f3 !important;
}

    .sun_pub_more_items .btn > span img {
        width: 100%;
        height: 100%;
        user-select: none;
        pointer-events: none;
    }

.publisher-box .publisher-box-footer .pub-footer-bottom {
    border-top: 1px solid #f4f4f4;
    padding: 11px 8px 7px;
}

.publisher-box #publisher-button {
    height: 34px;
    padding: 5px 16px;
    border-radius: 17px;
    line-height: 19px;
    font-weight: 500;
    letter-spacing: 0.7px;
    min-width: 150px;
    color: #ffffff;
    background-color: #4d91ea;
    border-color: #4d91ea;
}

.publisher-box .publisher-box-footer .poster-left-select {
    margin-right: 5px;
    margin-left: 5px;
}

.charsLeft-post {
    color: #999;
    font-size: 13px;
    margin: 7px 7px 7px 6px;
    font-weight: 700;
}

#focus-overlay {
    background: #000;
    bottom: 100%;
    left: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: opacity .3s,bottom 0 .3s;
    z-index: 1031;
}

.pub-focus #focus-overlay {
    bottom: 0;
    opacity: .6;
    transition: opacity .3s;
}

.pub-focus .post.publisher-box {
    z-index: 1035;
    position: relative;
}

.dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover {
    color: #262626;
    text-decoration: none;
    background-color: #e7ecf0;
}

.post-comment .avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #f4f4f4;
}

.post-comment .comment-body {
    margin-left: 48px;
}

    .post-comment .comment-body .comment-heading {
        display: flex;
        margin-bottom: 4px;
    }

.sun_innr_comm {
    width: 100%;
    border-radius: 6px;
    display: block;
    padding: 8px 12px;
    background-color: #f3f3f3;
    position: relative;
    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.1);
}

.post-comment .comment-body .comment-heading .user {
    font-size: 14px;
    font-weight: 700;
    display: inline;
    margin-top: 0;
}

.comment-options {
    font-size: 11px;
    color: #888;
}

.wo-reaction {
    max-width: 100%;
    padding: 0 60px;
    position: relative;
}

.like-btn {
    position: relative;
    cursor: pointer;
    display: block;
}

.comment-options .like-btn {
    z-index: 8;
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.comment-options svg.feather {
    width: 14px;
    height: 14px;
    margin-top: -3px;
}

.reactions-box {
    background: #ffffff;
    width: 292px;
    padding: 2px;
    position: absolute;
    top: -51px;
    z-index: 999;
    left: -10px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 2em;
    cursor: default;
    display: none;
}

.comment-options .reactions-box {
    z-index: 5;
    top: -55px;
}

.reaction {
    list-style-type: none;
    cursor: pointer;
    display: inline-block;
    width: 48px;
    height: 48px;
    float: left;
    opacity: 1;
    border-radius: 50%;
    transform: scale(1);
    transition: transform .25s ease;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: slideUp cubic-bezier(0.49, 0, 0.46, 1);
    animation: slideUp cubic-bezier(0.49, 0, 0.46, 1);
}

    .reaction img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

.comments-list .post-comment {
    display: block;
    width: 100%;
    margin: 20px 0;
}

    .comments-list .post-comment:first-child {
        margin-top: 5px;
    }

#comment_reactions {
    padding: 0;
    display: inline-block;
}

.comment-text, .reply-text {
    font-size: 13px;
    color: #777;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-word;
}

.post-comment .comment-body .reply {
    display: block;
    width: 100%;
    margin: 20px 0;
}

.comment-reply {
    display: none;
}

    .comment-reply .wo_commreply_combo {
        margin-top: 10px;
        display: flex;
    }

        .comment-reply .wo_commreply_combo .textarea {
            margin-top: 0;
            border-radius: 4px;
            padding-right: 13px;
            margin-left: 5px;
            resize: none;
            font-size: 13px;
            background-color: #fff;
            border: 1px solid #ededed;
            box-shadow: none;
        }

.chat-acts li {
    padding: 10px 0;
    border-bottom: 1px solid #e7ecf0;
}

    .chat-acts li:last-child {
        border-bottom: none;
    }

.chat-acts .avatar img {
    border-radius: 50%;
    width: 55px;
    height: 55px;
}

.chat-acts .info-prt {
    margin-left: 65px;
    padding-top: 2px;
}

    .chat-acts .info-prt a {
        color: #667787;
    }

    .chat-acts .info-prt .first-prt {
        color: #000;
    }

    .chat-acts .info-prt .noti-new {
        display: block;
        margin-top: 3px;
    }

.qc-sale .item {
    margin-bottom: 15px;
}

    .qc-sale .item:last-child {
        margin-bottom: 0;
    }

.qc-sale .image img {
    width: 100%;
    height: 120px;
}

.qc-sale .info-qc .title {
    color: #359df4;
    font-size: 14px;
}

.noti-acts .item {
    margin-bottom: 15px;
}

.noti-acts .image {
    width: 100px;
    height: 100px;
}

    .noti-acts .image img {
        height: 100%;
        height: 100%;
    }

.noti-acts .info-noti {
    margin-left: 110px;
}

.form-setting-page {
    width: 90%;
    margin: auto;
    border-bottom: 1px solid #e7ecf0;
    padding: 15px 0;
}

    .form-setting-page .form-setting-head {
        margin-bottom: 15px;
        overflow: hidden
    }

        .form-setting-page .form-setting-head h3 {
            display: inline-block;
            color: #000;
            font-size: 14px;
            font-weight: 700;
            vertical-align: -webkit-baseline-middle;
        }

    .form-setting-page:last-child {
        border-bottom: none;
    }

.form-horizontal .control-label {
    text-align: left !important
}

.form-setting-page .form-control {
    box-shadow: none;
    border-color: #e7ecf0;
    background-color: #f5f8fa;
}

.form-setting-page .col-sm-3,
.form-setting-page .col-sm-9 {
    padding-left: 15px;
    padding-right: 15px;
}

.form-setting-page textarea.form-control {
    resize: none
}

/* login */

.login-page .main-content {
    margin-top: 0;
}

.login-layout {
    max-width: 600px;
    height: 100%;
    margin: 0 auto;
    padding: 24px 20px 0;
}

    .login-layout .header-login {
        position: relative;
    }

.header-login h1 a {
    display: block;
    width: 100px;
    height: 41px;
    margin: 0 auto 18px;
    text-align: center
}

.header-login h2 {
    display: block;
    margin-bottom: 18px;
    color: #333;
    font-size: 1.25em;
    font-weight: 400;
    text-align: center;
}

.body-login .body-container-login {
    position: relative;
    background-color: #fff;
    max-width: 400px;
    margin: 0 auto;
    -webkit-box-shadow: 0 8px 24px rgba(21,48,142,0.14);
    box-shadow: 0 8px 24px rgba(21,48,142,0.14);
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
}

    .body-login .body-container-login .tabs {
        background-color: #fff;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        border-radius: 2px 2px 0 0;
        -moz-border-radius: 2px 2px 0 0;
        -webkit-border-radius: 2px 2px 0 0;
    }

        .body-login .body-container-login .tabs ul {
            margin: 0 auto;
            padding: 0;
            text-align: center
        }

            .body-login .body-container-login .tabs ul li {
                position: relative;
                float: left;
                width: 50%;
                padding: 0;
                text-align: center;
            }

            .body-login .body-container-login .tabs ul::after {
                clear: both;
                content: "";
                display: table;
            }

            .body-login .body-container-login .tabs ul li a {
                display: block;
                position: relative;
                padding: 0 20px;
                height: 50px;
                line-height: 50px;
                color: #6f6f6f;
                font-size: 0.875em;
                font-weight: 500;
                text-transform: uppercase;
            }

            .body-login .body-container-login .tabs ul li.active a {
                color: #333;
                font-weight: bold;
            }

    .body-login .body-container-login .form-signin {
        padding: 30px 45px;
    }

        .body-login .body-container-login .form-signin .line-form {
            position: relative;
            margin-bottom: 18px;
            padding: 5px 0;
        }

            .body-login .body-container-login .form-signin .line-form.has-ico {
                padding-left: 28px;
            }

        .body-login .body-container-login .form-signin input {
            display: inline-block;
            background-color: transparent;
            width: 100%;
            padding: 6px 0;
            font-size: 0.875rem;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            border: none;
            color: #333;
        }

        .body-login .body-container-login .form-signin .line-form.has-ico i {
            position: absolute;
            top: 12px;
            left: 5px;
            color: #555;
            font-size: 1em;
        }

            .body-login .body-container-login .form-signin .line-form.has-ico i.fa {
                top: 13px;
                left: 5px;
                font-size: 1.25em;
            }

        .body-login .body-container-login .form-signin .line-form:after,
        .body-login .body-container-login .form-signin .line-form:before {
            position: absolute;
            bottom: 0;
            left: 0;
            content: "";
            background-color: #ecedf0;
            width: 100%;
            height: 1px;
        }

.has-2btn .btn--m {
    display: inline-block;
    background-color: #0190f3;
    min-width: 210px;
    vertical-align: middle;
    cursor: pointer;
    white-space: nowrap;
    color: #fff;
    font-weight: 500;
    border: 0 none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}

    .has-2btn .btn--m.first {
        height: 44px;
        line-height: 44px;
        padding: 0 20px;
        font-size: 0.875rem;
        width: 100%;
    }

.body-login .body-container-login .btn-wrap-more {
    position: relative;
    margin-top: 12px;
}

    .body-login .body-container-login .btn-wrap-more .btn-rq {
        position: relative;
        width: 100%;
        margin-bottom: 12px;
    }

    .body-login .body-container-login .btn-wrap-more .btn.btn-default {
        background-color: #fff;
        color: #0190f3;
        -webkit-box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
        box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08)
    }

    .body-login .body-container-login .btn-wrap-more .login-or {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

        .body-login .body-container-login .btn-wrap-more .login-or a {
            color: #333;
        }

        .body-login .body-container-login .btn-wrap-more .login-or div span {
            color: #888;
            font-size: 0.813em;
        }

.body-login .action-more {
    display: block;
    padding: 20px 15px;
    color: #888;
    font-size: 0.875em;
    font-weight: normal;
    text-align: center;
}

.login-addon {
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;
}

    .login-addon p.select-lang {
        margin-bottom: 24px;
        text-align: center;
    }

    .login-addon p {
        display: block;
        margin-bottom: 12px;
        color: #555;
        font-size: 0.75em;
        text-align: center;
    }

    .login-addon .lang {
        padding-right: 5px;
        margin-right: 5px;
    }

    .login-addon .logos {
        text-align: center;
        font-size: 0;
    }

        .login-addon .logos ul li {
            display: inline-block;
            margin: 0 8px;
        }

            .login-addon .logos ul li img {
                display: block;
                width: 50px;
                height: 50px;
                object-fit: contain
            }

/* lightbox view */

.lightbox-backgrond, .lightbox-content {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    left: 0;
}

.lightbox-backgrond {
    width: 100%;
    z-index: 1030;
    background: rgba(0,0,0,.8);
}

/* lightBox */
.lightbox-content {
    width: 100%;
    height: calc(100% - 50px);
    overflow: hidden;
    background-color: #000;
    margin-top: 0;
    margin: auto;
    max-width: 1040px;
    z-index: 1131;
    transition: all .4s;
}

#draggableHelper {
    display: table-cell;
    vertical-align: middle;
}

.lightbox-content .story-img {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-right: 350px;
    width: calc(100% - 350px);
    border-radius: 3px 0 0 3px;
    vertical-align: middle;
}

.lightbox-content .sun_img_innr {
    position: relative;
    display: table;
    height: calc(100% - 48px);
}

.lightbox-content .story-img img {
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    -webkit-transition: -webkit-transform .3s cubic-bezier(0,0,.25,1) 0;
    -moz-transition: -moz-transform .3s cubic-bezier(0,0,.25,1) 0;
    -o-transition: -o-transform .3s cubic-bezier(0,0,.25,1) 0;
    transition: transform .3s cubic-bezier(0,0,.25,1) 0;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    pointer-events: none;
    max-width: 100%;
    display: block;
    max-height: calc(100vh - 100px);
    margin-left: auto;
    margin-right: auto;
}

.lightbox-content .comment-section {
    width: 350px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    padding: 0;
    border-radius: 0;
    background-color: #fff;
}

.sun_lightbox_right {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
}

    .sun_lightbox_right .comment-section-inner {
        position: relative;
    }

.comment-section-inner .comment-inner-header {
    padding: 16px 8px 16px 16px;
}

    .comment-section-inner .comment-inner-header .close-lightbox {
        padding: 8px;
        margin: 0;
    }

.lightbox-content .user-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 9px;
}

.lightbox-content .comment-section .user-name {
    margin-bottom: 0;
    margin-top: 4px;
    font-weight: 700;
}

.comment-section-inner .comment-inner-header h6 {
    margin-bottom: 3px;
    margin-top: 7px;
}

.lightbox-content .comment-section .post-info {
    margin: 0 16px 10px;
    position: relative;
}

    .lightbox-content .comment-section .post-info p {
        font-size: 14px;
        color: #555;
        word-break: break-word;
    }

.comment-inner-footer {
    padding: 25px;
    width: 100%;
    overflow-y: auto;
    -webkit-flex: 1 auto;
    -ms-flex: 1 auto;
    flex: 1 auto;
    flex-grow: 1;
    background-color: #f2f3f5;
}

    .comment-inner-footer .sun_innr_comm {
        background-color: #ffffff;
    }

.lightbox-post-footer.post-comments {
    border-top: 1px solid #e7e8ec;
    padding: 12px;
    height: 55px;
    z-index: 5;
    flex: 0 0 auto;
    vertical-align: bottom;
}

.post-commet-textarea {
    position: relative;
}

.lighbox.comment-textarea {
    border: none;
    resize: none;
    box-shadow: none;
    height: auto;
}

.lightbox-content .story-img .changer {
    background: 0 0;
    top: 0;
    width: 60px;
    height: 100%;
    margin-bottom: 0;
    z-index: 1034;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    cursor: pointer;
    display: none
}

.lightbox-content .story-img:hover .changer {
    display: block
}

.lightbox-content .story-img .changer svg.feather {
    margin-top: 0;
    width: 65px;
    height: 65px;
    color: rgba(255,255,255,.55);
    transition: all .2s ease-in-out;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
}

.lightbox-content .story-img .previous-btn {
    left: 0;
}

.lightbox-content .story-img .next-btn {
    right: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
}

/* Table */

.table-custom thead {
    white-space: nowrap;
    background: #f3f7f9;
    border-bottom: 2px solid #cad6d8;
    color: #1da1f2;
}

    .table-custom thead tr th {
        vertical-align: middle;
        text-align: center;
        padding: 16px 5px;
    }

.table-custom tbody {
    border-top: none !important;
}

    .table-custom tbody .row-head {
        color: #578ebe;
        font-weight: 600;
        background: #f5f5f5;
        cursor: pointer
    }

    .table-custom tbody .row-head-hover:hover {
        background: #e7ecf0;
    }

    .table-custom tbody tr td {
        vertical-align: middle !important;
        padding: 5px !important
    }

.table-custom .tooltip {
    opacity: 1;
    position: relative;
    font-size: 14px;
    text-align: center;
    cursor: pointer
}

.table-custom .cl-red {
    color: red;
    cursor: pointer;
}

.table-custom .view-more {
    color: #1da1f2;
    font-size: 12px;
}

    .table-custom .view-more:hover {
        text-decoration: underline
    }

.table-custom .no-check {
    background-image: url('../img/icons/ico-delete-min.png');
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    background-size: cover;
    display: inline-block;
}

.table-custom .check {
    background-image: url('../img/icons/ico-select-min.png');
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    background-size: cover;
    display: inline-block;
}

.table-custom .name {
    text-align: left
}

.table-dkhp tr:hover {
    cursor: pointer;
}

.table-pointer tr:hover {
    cursor: pointer;
}

.table-pointer .tr-active {
    background-color: #ffeb3b52;
    color: #0c6fbe;
}

.table-dkhp div {
    color: #003f65;
}

    .table-dkhp div.name {
        color: #003f65;
        font-weight: 600;
    }

.fl-table thead {
    background: #f3f7f9;
    border-bottom: 2px solid #cad6d8;
    color: #1da1f2;
    white-space: nowrap;
}

    .fl-table thead th {
        width: 15%;
        vertical-align: middle !important;
        text-align: center;
    }

        .fl-table thead th:first-child {
            width: 5%;
        }

.fl-table tbody tr td:first-child {
    background: #ffffce;
    vertical-align: middle;
}

.fl-table tbody tr td {
    border-bottom: 1px solid #d9e0eb;
}

.fl-table .content {
    background-color: #fdff9a;
    border: 1px solid #edaf00;
    color: #003763;
    padding: 5px;
    margin-bottom: 5px;
    font-size: 13px;
    border-radius: 4px !important;
    position: relative;
}

    .fl-table .content.color-lichhoc {
        background-color: #e7ecf0;
        border: 1px solid #c9d0db;
    }

    .fl-table .content:last-child {
        margin-bottom: 0;
    }

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table tbody {
    background: url("../img/icons/transparent-pattern-square-4.png");
}

.profile-userpic img {
    width: 130px;
    height: 130px;
}

.tamngung {
    position: absolute;
    left: -6px;
    top: -5px;
    z-index: 1;
    overflow: hidden;
    width: 100%;
    height: 100%;
    text-align: right;
}

    .tamngung span {
        font-size: 10px;
        font-weight: 700;
        color: #FFF;
        text-align: center;
        line-height: 20px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        width: 100px;
        display: block;
        background: linear-gradient(#f14f3f 0,#cb4335 100%);
        box-shadow: 0 3px 10px -5px rgba(0,0,0,1);
        text-shadow: 1px 1px 2px rgba(0,0,0,.25);
        position: absolute;
        top: 19px;
        left: -21px;
    }

        .tamngung span::after, .tamngung span::before {
            border-bottom: 3px solid transparent;
            border-top: 3px solid #a3362a;
            content: "";
            position: absolute;
            top: 100%;
            z-index: -1;
        }

        .tamngung span::before {
            border-left: 3px solid #a3362a;
            border-right: 3px solid transparent;
            left: 0;
        }

        .tamngung span::after {
            right: 0;
            border-left: 3px solid transparent;
            border-right: 3px solid #a3362a;
        }

.tableGC li {
    display: inline-block;
    margin-right: 15px;
}

    .tableGC li span {
        width: 40px;
        height: 15px;
        border: 1px solid #ccc;
        margin-right: 10px;
        cursor: pointer;
        display: inline-block;
        vertical-align: text-top;
    }

h3.title-table {
    color: #0c6fbe;
    font-weight: 600;
    position: relative;
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
}

    h3.title-table:before {
        content: "";
        position: absolute;
        left: 0;
        width: 3px;
        height: 100%;
        background: #eb2e51;
    }

.detail-hp {
    padding: 10px;
    background: #ffeb3b6b;
    color: #111;
    border: 1px solid #cad6d8;
    border-bottom: 0px;
    /* border-right: 1px; */
}

    .detail-hp p {
        margin-bottom: 5px;
    }

.btn-action-register {
    padding: 6px 12px;
    margin-bottom: 20px;
    margin-top: 20px
}

.fix-menu-HP {
    width: 80px;
    position: fixed;
    top: 30%;
    right: 0;
    list-style: none;
    padding: 5px 0;
    margin: 0;
    z-index: 50;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 3px 0 0 3px;
}

    .fix-menu-HP .fix-menu-HP_item {
        margin: 0;
        padding: 5px;
        margin-bottom: 10px;
        text-align: center;
    }

        .fix-menu-HP .fix-menu-HP_item img {
            margin-bottom: 5px;
        }

/* Dashboard */
.main-dashboard .portlet {
    margin-bottom: 0
}

.featured {
    display: flex;
    margin-left: -7.5px;
    margin-right: -7.5px;
}

.featured-item {
    text-align: center;
    width: 100%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 7.5px;
    padding-right: 7.5px;
}

    .featured-item .icon {
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .featured-item .title {
        display: block;
    }

.panel-admin .panel-heading {
    background: #fff;
    padding: 15px 0;
}

    .panel-admin .panel-heading span {
        width: 50%;
        display: inline-block;
        float: left;
    }

.panel-admin .panel-scroll {
    height: 220px;
}

.panel-admin .table td {
    vertical-align: middle !important;
    padding: 7px 0;
}

.main-dashboard .chart-custom .box-df {
    height: 366px;
    overflow: hidden
}

.box-menu .item-box-menu {
    width: 100%;
    padding: 15px;
    height: 116px;
    overflow: hidden;
    box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.10);
}

    .box-menu .item-box-menu .name {
        margin-bottom: 5px;
    }

    .box-menu .item-box-menu .desc {
        display: flex;
        align-items: center;
    }

    .box-menu .item-box-menu .number,
    .box-menu .item-box-menu .icon-menu {
        width: 50%;
        float: left;
    }

    .box-menu .item-box-menu .number {
        font-size: 36px;
    }

    .box-menu .item-box-menu .icon-menu .icon {
        border: 1px solid;
        border-radius: 100%;
        padding: 7px;
        font-size: 13px;
    }

.main-dashboard .profile-ds-info {
    height: 248px;
    overflow: hidden
}

.box-menu .col-xs-6:nth-child(2) .item-box-menu {
    background: #e0fbff;
    color: #4da1e8;
}

.box-menu .col-xs-6:nth-child(1) .item-box-menu {
    background: #daffdd;
    color: #14b921;
}


.box-menu .col-xs-6:nth-child(4) .item-box-menu {
    background: #ffdae3;
    color: #da375e;
}


.box-menu .col-xs-6:nth-child(3) .item-box-menu {
    background: #fff2d4;
    color: #ff9205;
}

/* Menu Fixed */

.mainMn {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2000;
    display: none;
    background: #175485;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: linear-gradient(to right, #00BDA0, #007DDD);
    padding-top: 6%;
}

    .mainMn .ctn {
        width: 100%;
        max-width: 1170px;
        min-width: 960px;
        margin: auto;
    }

    .mainMn .listMenu {
        padding-top: 64px;
    }

        .mainMn .listMenu li {
            display: inline-block;
            vertical-align: top;
            width: 32%;
        }

        .mainMn .listMenu a {
            color: #fff;
            font-weight: 300;
            padding: 16px;
            display: inline-block;
            letter-spacing: normal;
            font-size: inherit
        }

.mainMnBtn {
    width: 19px;
    height: 19px;
    float: right;
    display: inline-block;
    margin-top: 16px;
    margin-left: 10px;
}

.mainMn .closeMn {
    color: #fff;
    margin-left: 20px;
    position: absolute;
}

    .mainMn .closeMn i {
        font-size: 20px
    }

/* POPUP */

#boxes {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2100;
    width: 100%;
    height: 100%;
}

#mask {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    background-color: #535353;
    display: none;
}

#boxes .closePopup {
    position: absolute;
    background: url("../img/icons/close-pop.png") no-repeat center center #369ef4;
    right: 0;
    top: 0;
    width: 26px;
    height: 26px;
    opacity: 1;
}

#boxes .window {
    position: absolute;
    display: none;
    z-index: 990;
    border-radius: 5px;
    max-width: 75%;
    height: 85vh;
}

    #boxes .window.window_small {
        height: auto;
        max-width: 400px;
    }

#boxes #dialog {
    padding: 30px;
    background-color: #ffffff;
    font-size: 14px;
    overflow-y: scroll;
}

#boxes .window::-webkit-scrollbar-track {
    background-color: #eaeaea;
}

#boxes .window::-webkit-scrollbar {
    width: 5px;
    background-color: #369ef4;
}

#boxes .window::-webkit-scrollbar-thumb {
    background-color: #369ef4;
}


#boxes .window .header-box-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: center;
}

    #boxes .window .header-box-flex .text-right {
        width: 100%;
    }

#boxes .content {
    padding-bottom: 30px;
}

    #boxes .content .title_heading {
        font-size: 24px;
        margin-bottom: 30px;
        margin-top: 0;
        color: #000;
        font-weight: 700;
        width: 100%;
    }

    #boxes .content .desc-box {
        margin-bottom: 30px;
        margin-top: 30px;
        color: #003f65;
    }

.submit_boxes {
    text-align: center;
    padding: 20px 0;
}

    .submit_boxes .btn_submit_boxes {
        min-width: 250px;
        padding: 6px 12px;
        border: 1px solid #ff5722;
        color: #369ef4;
        background-color: #ff5722;
        color: #fff;
        border-radius: 3px !important;
    }

.group_box .title {
    color: black;
    margin: 10px 0px;
    font-size: 15px;
    font-weight: bold;
    /*text-transform: uppercase;*/
    display: block;
    cursor: pointer;
}

.group_box .group_cauhoi .title_cauhoi {
    margin: 10px 0px;
    padding-left: 15px;
}

.group_box .group_cauhoi .group-cautraloi {
    padding-left: 30px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
}

.group_box .box-thongtin-ks {
    padding-left: 30px;
}

.group_box .group_cauhoi .group-cautraloi li {
    display: inline-block;
    padding-right: 30px;
    padding-left: 5px;
    width: 20%
}

.group_box .group_cauhoi .group-cautraloi .mt-checkbox:hover > input:not([disabled]):checked ~ span,
.group_box .group_cauhoi .group-cautraloi .mt-checkbox > input:checked ~ span,
.group_box .group_cauhoi .group-cautraloi .mt-radio:hover > input:not([disabled]):checked ~ span,
.group_box .group_cauhoi .group-cautraloi .mt-radio > input:checked ~ span {
    background: #369ef4;
}

.group_box .group_cauhoi .group-cautraloi .mt-radio > span:after {
    background: #fff;
}

.group_box .group_cauhoi .group-cautraloi label {
    font-weight: 400
}

.group_box .input-ykien {
    width: 100%;
    height: 65px;
    border: 1px solid #94c0d2;
    padding: 6px 12px;
    resize: none;
    outline: 0;
}

.group_box.open_box .title {
    color: #369ef4
}

.group_box.close_box .group_cauhoi {
    height: 0px;
    transition: height 1s ease-out;
    -webkit-transform: scaleY(0);
    -o-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
    float: left;
    display: block;
}

.group_box.open_box .group_cauhoi {
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    width: 100%;
    margin: 0px 0px 10px 0px;
    display: block;
    -webkit-transform: scaleY(1);
    -o-transform: scaleY(1);
    -ms-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: top;
    -o-transform-origin: top;
    -ms-transform-origin: top;
    transform-origin: top;
    -webkit-transition: -webkit-transform 0.4s ease-out;
    -o-transition: -o-transform 0.4s ease;
    -ms-transition: -ms-transform 0.4s ease;
    transition: transform 0.4s ease;
    box-sizing: border-box;
}


.changeColor {
    padding: 10px 0 5px;
    position: relative;
    background: #fff;
    top: 10px;
}

    .changeColor .theme-color li {
        width: 15px;
        height: 15px;
        display: inline-block;
        list-style-type: none;
        border: 1px solid #ccc;
        margin-left: 10px;
        cursor: pointer;
        border-radius: 100% !important;
    }

/* Menu accordion */

.accordion-menu {
    position: relative;
    z-index: 99
}

    .accordion-menu ul {
        margin: 0;
        padding: 0;
        list-style: none
    }

        .accordion-menu ul li {
            width: 100%;
            display: block;
            position: relative
        }

            .accordion-menu ul li a {
                width: 100%;
                padding: 14px 15px;
                float: left;
                display: block;
                text-decoration: none;
                background: #fff;
                white-space: nowrap;
                position: relative;
                overflow: hidden;
                -o-transition: color .2s linear,background .2s linear;
                -moz-transition: color .2s linear,background .2s linear;
                -webkit-transition: color .2s linear,background .2s linear;
                transition: color .2s linear,background .2s linear;
            }

    .accordion-menu > ul > li > a {
        border-bottom: solid 1px #e7ecf0
    }

    .accordion-menu ul li a i {
        width: 25px;
        float: left;
        line-height: 18px;
        font-size: 16px;
        text-align: left
    }

    .accordion-menu .submenu-indicator {
        float: right;
        right: 22px;
        position: absolute;
        line-height: 19px;
        font-size: 20px;
        -o-transition: transform .3s linear;
        -moz-transition: transform .3s linear;
        -webkit-transition: transform .3s linear;
        -ms-transition: transform .3s linear
    }

    .accordion-menu ul ul.submenu .submenu-indicator {
        line-height: 16px
    }

    .accordion-menu .submenu-indicator-minus > .submenu-indicator {
        -ms-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }

    .accordion-menu ul ul.submenu, .accordion-menu ul ul.submenu li ul.submenu {
        width: 100%;
        display: none;
        position: static
    }

        .accordion-menu ul ul.submenu li {
            clear: both;
            width: 100%
        }

            .accordion-menu ul ul.submenu li a {
                width: 100%;
                float: left;
                background: #fff;
                border-top: none;
                position: relative;
                border-left: solid 3px transparent;
                -o-transition: border .2s linear;
                -moz-transition: border .2s linear;
                -webkit-transition: border .2s linear;
                transition: border .2s linear
            }

            .accordion-menu ul ul.submenu li:hover > a {
                border-left-color: #667580
            }

        .accordion-menu ul ul.submenu > li > a {
            padding-left: 15px;
        }

        .accordion-menu ul ul.submenu > li > ul.submenu > li > a {
            padding-left: 45px
        }

        .accordion-menu ul ul.submenu > li > ul.submenu > li > ul.submenu > li > a {
            padding-left: 60px
        }

/* Datatable */

.dataTables_scroll .table-custom {
    margin-bottom: 0
}

.dataTables_scroll thead {
    border-bottom: none
}

.DTFC_LeftWrapper .table-custom {
    margin: 0
}

    .DTFC_LeftWrapper .table-custom thead {
        border-bottom: none
    }

.DTFC_LeftBodyWrapper td {
    background: #fff;
}

#xemDiem_wrapper .dataTables_info {
    display: none
}

#xemDiem_wrapper .table-custom thead tr th {
    padding: 5px 10px;
}

.dataTables_paginate {
    margin-top: 30px;
}

    .dataTables_paginate .paginate_button {
        padding: 6px 12px;
        display: inline-block;
        color: #222;
    }

        .dataTables_paginate .paginate_button.current {
            background-color: #1da1f2;
            color: #fff;
        }

.td_khaosat_danhgia {
    width: 100%;
    height: 100%;
    background: #ffeb3b40;
}

    .td_khaosat_danhgia .item_khaosat_danhgia span {
        font-size: 12px;
    }

    .td_khaosat_danhgia .item_khaosat_danhgia .btn_khaosat_danhgia {
        background: #ff5722;
        color: #fff;
        border-radius: 3px !important;
        padding: 1px 10px;
        display: inline-block;
        font-size: 12px;
    }
/* notification page */
.notification .item {
    margin-bottom: 10px;
    border: 1px solid #eaeaea;
    padding: 10px;
    border-radius: 4px !important;
}

    .notification .item:hover {
        background: #eaeaea;
    }

    .notification .item .image {
        width: 125px;
        margin-right: 15px;
        float: left;
        margin-top: 10px;
        text-align: center
    }

    .notification .item .desc-txt {
        width: calc(100% - 140px);
        float: left;
    }

    .notification .item .title {
        color: #297eca;
        display: block;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .notification .item:hover .title {
        color: #003f65;
    }

    .notification .item.new .title::after {
        content: url(../img/icons/new.gif);
    }

    .notification .item .date {
        font-size: 12px;
        color: #e6002b;
    }

    .notification .item .desc {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

.detail-Tin {
    margin-bottom: 20px;
}

    .detail-Tin .title {
        font-size: 24px;
        line-height: 1.3;
        font-weight: 700;
        margin-bottom: 15px;
    }

    .detail-Tin .desc {
        font-size: 14px;
        line-height: 1.3;
        font-weight: 600;
        margin-bottom: 10px;
    }

.detail-TinLienQuan ul {
    padding-left: 20px
}

.detail-TinLienQuan li {
    margin-bottom: 10px;
    list-style-type: circle
}

/*Thanh Toán*/

.radio-bank-box .label-bank {
    position: relative;
    cursor: pointer;
    margin: 7px 0;
}

    .radio-bank-box .label-bank .radio-bank-ckb {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        margin: 0;
        cursor: pointer;
    }

    .radio-bank-box .label-bank .radio-bank-img {
        transition: -webkit-transform 300ms ease;
        transition: transform 300ms ease;
        transition: transform 300ms ease, -webkit-transform 300ms ease;
        border: 1px dashed #ccc;
        padding: 5px;
        position: relative;
    }

    .radio-bank-box .label-bank .radio-bank-ckb:checked + .radio-bank-img {
        border: 1px solid #36e52a;
    }

        .radio-bank-box .label-bank .radio-bank-ckb:checked + .radio-bank-img:after {
            content: url(../img/icons/ico-select-min.png);
            width: 40px;
            height: 40px;
            line-height: 40px;
            border-radius: 100%;
            z-index: 999;
            position: absolute;
            top: -10px;
            right: -15px;
        }

.btn-bank-custom {
    background: #ff5722;
    color: #fff;
    width: 160px;
    padding: 12px 20px;
    border: none;
    margin: 0;
    border-bottom: 3px solid #c93100;
    border-radius: 3px !important;
}

    .btn-bank-custom:hover,
    .btn-bank-custom:focus {
        color: #fff;
        background: #f84005;
    }

.profile-ds-info .form-body {
    padding: 15px;
}

.menu-breadcrumb {
    position: relative;
    margin-top: 5px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    z-index: 1032
}

.sidebar-menu-ico {
    margin: 0;
    margin-bottom: 0;
    cursor: pointer;
    height: 19px;
    line-height: 19px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

    .sidebar-menu-ico .text-menu {
        vertical-align: top;
        margin-left: 3px;
    }

.menu-breadcrumb .accordion-menu ul li a {
    font-size: 12px;
}

.menu-breadcrumb .dropdown-menu {
    box-shadow: none;
    width: 100%;
}

.menu-breadcrumb .breadcrumb {
    margin-bottom: 0;
    margin: 0;
    padding: 0;
    height: 15px;
    background: transparent;
}

/* config-tool */

#config-tool {
    position: fixed;
    left: 0;
    top: 82px;
    width: 188px;
    z-index: 10000;
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
}

    #config-tool.closed {
        left: -188px;
    }

    #config-tool #config-tool-cog {
        background: #fff;
        background-clip: padding-box;
        cursor: pointer;
        padding: 11px;
        position: absolute;
        text-align: center;
        width: 50px;
        -webkit-transition: all 0.1s ease-in-out 0s;
        transition: all 0.1s ease-in-out 0s;
        left: auto;
        right: -50px;
        box-shadow: 3px 3px 3px -2px rgba(0,0,0,0.1);
    }

.tab--portlet .portlet {
    margin-bottom: 0;
    margin-top: 15px;
    position: relative;
    padding-top: 35px;
    overflow: hidden;
}

    .tab--portlet .portlet .portlet-title {
        border-bottom: none;
        margin-top: 0;
        position: absolute;
        top: -7px;
        right: -1px;
        z-index: 1;
    }

        .tab--portlet .portlet .portlet-title .btn-action {
            background-color: #f52b2bdb !important
        }

.tab--portlet .form-group {
    margin-bottom: 6px
}

.tab--portlet .gray-border {
    border-radius: 6px !important;
    border: 1px solid #75757575 !important;
}

.tab--portlet .form-control-sm {
    width: 100%;
    padding: 3px 6px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

.portlet--add-btn-action {
    margin-bottom: 0;
    padding-left: 0 !important
}

.k-autocomplete.k-state-default, .k-picker-wrap.k-state-default, .k-numeric-wrap.k-state-default, .k-dropdown-wrap.k-state-default {
    border-color: #cccccc !important;
}

.k-state-default > .k-select {
    border-color: #cccccc !important;
    background: #fff !important;
}

.k-state-hover>.k-select {
     border-color: unset; 
}

.k-dropdown-wrap .k-input, .k-picker-wrap .k-input, .k-numeric-wrap .k-input {
    height: 32px !important;
    padding: 0px 10px !important;
}

.guinhanxet {
    margin-top: 15px;
    /*max-width: 500px;*/
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding: 20px 20px 0;
    background: #f0f0f0;
}

    .guinhanxet .reviews-title {
        font-size: 14px;
        color: #333333;
        text-transform: uppercase;
        margin-bottom: 15px;
        font-weight: 700;
    }

    .guinhanxet a {
        color: #1da1f2;
    }

.guinhanxet .form-group {
    position: relative;
}

.guinhanxet textarea {
    resize: none;
    border: none;
}

    .guinhanxet button {
        background: #eb2e51;
        color: #fff;
        position: absolute;
        right: 0;
        top: -10px;
    }

    .comments-list {
        position: relative;
        padding: 20px;
        background: #f0f0f0;
        margin-top: 50px
    }

    .comments-list .comments-list {
        padding: 0 0 0px 40px;
    }
    /**
 * Lineas / Detalles
 -----------------------*/
    .comments-list:before {
        content: '';
        width: 2px;
        height: 100%;
        border-left: 1px dotted #eaeaea;
        position: absolute;
        left: 32px;
        top: 0;
    }

    .comments-list:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 27px;
        width: 7px;
        height: 7px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }

.reply-list:before, .reply-list:after {
    display: none;
}

.reply-list li:before {
    content: '';
    width: 30px;
    height: 2px;
    border-top: 1px dotted #eaeaea;
    position: absolute;
    top: 25px;
    left: -25px;
}


.comments-list li {
    margin-bottom: 15px;
    display: block;
    position: relative;
}

    .comments-list li:after {
        content: '';
        display: block;
        clear: both;
        height: 0;
        width: 0;
    }

.reply-list {
    padding-left: 88px;
    clear: both;
    margin-top: 15px;
}
/**
 * Avatar
 ---------------------------*/
.comments-list .comment-avatar {
    width: 65px;
    height: 65px;
    position: relative;
    z-index: 99;
    float: left;
    border-radius: 60px !important;
    border: 3px solid #FFF;
    -moz-border-radius: 4px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    -moz-box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    overflow: hidden;
}

    .comments-list .comment-avatar img {
        width: 100%;
        height: 100%;
    }

.reply-list .comment-avatar {
    width: 50px;
    height: 50px;
}

.comment-main-level:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    clear: both;
}
/**
 * Caja del Comentario
 ---------------------------*/
.comments-list .comment-box {
    width: 89%;
    float: right;
    position: relative;
    background: #fff;
}

    .comments-list .comment-box:before, .comments-list .comment-box:after {
        content: '';
        height: 0;
        width: 0;
        position: absolute;
        display: block;
        border-width: 10px 12px 10px 0;
        border-style: solid;
        border-color: transparent #FCFCFC;
        top: 8px;
        left: -11px;
    }

    .comments-list .comment-box:before {
        border-width: 11px 13px 11px 0;
        border-color: transparent rgba(0,0,0,0.05);
        left: -12px;
    }

.reply-list .comment-box {
    width: 90%;
}

.comment-box .comment-head {
    background: #FCFCFC;
    padding: 10px 12px;
    border-bottom: 1px solid #E5E5E5;
    overflow: hidden;
    -webkit-border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0;
}

    .comment-box .comment-head i {
        float: right;
        margin-left: 14px;
        position: relative;
        top: 2px;
        color: #A6A6A6;
        cursor: pointer;
        -webkit-transition: color 0.3s ease;
        -o-transition: color 0.3s ease;
        transition: color 0.3s ease;
    }

        .comment-box .comment-head i:hover {
            color: #03658c;
        }

.comment-box .comment-name {
    color: #283035;
    font-size: 14px;
    font-weight: 700;
    float: left;
    margin-right: 10px;
}

    .comment-box .comment-name a {
        color: #283035;
    }

.comment-box .comment-head span {
    float: left;
    color: #999;
    font-size: 13px;
    position: relative;
    top: 1px;
}

.comment-box .comment-content {
    background: #FFF;
    padding: 12px;
    color: #595959;
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    border-radius: 0 0 4px 4px;
}

.comment-box .comment-name.by-author, .comment-box .comment-name.by-author a {
    color: #03658c;
}

    .comment-box .comment-name.by-author:after {
        content: 'Quản trị viên';
        background: #03658c;
        color: #FFF;
        font-size: 12px;
        padding: 3px 5px;
        font-weight: 700;
        margin-left: 10px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }

/** =====================
 * Responsive
 ========================*/
@media only screen and (max-width: 766px) {
    .comments-container {
        width: 480px;
    }

    .comments-list .comment-box {
        width: 390px;
    }

    .reply-list .comment-box {
        width: 320px;
    }
}



.line-chart {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
}

    .line-chart .item {
        width: 100%;
        color: #707e88;
        font-size: 13px;
    }

    .line-chart .button-lhp {
        background: rgba(35, 134, 232, 0.6);
        display: inline-block;
        padding: 5px 20px;
        border-radius: 4px !important;
        color: #fff;
        font-weight: 700;
    }

.color-active {
    color: #1da1f2;
}

.line-chart .item .number {
    font-size: 16px;
    font-weight: 400;
}


.user-list {
    padding: 10px 15px;
    height: 100vh;
}

    .user-list .user-item {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        flex-shrink: 1;
        overflow: visible;
        align-items: center;
        cursor: pointer;
        height: 59px;
        border-bottom: 1px solid #f5f5f5;
    }

        .user-list .user-item .user {
            position: relative;
            display: flex;
            flex-direction: column;
            flex-grow: 0;
            flex-shrink: 0;
            overflow: hidden;
            align-items: stretch;
            width: 36px;
            height: 36px;
        }

            .user-list .user-item .user .alphabet-avatar {
                background: #5178D0;
                border-radius: 30px !important;
                -moz-border-radius: 30px !important;
                -webkit-border-radius: 30px !important;
                color: #ffffff;
                display: inline-block;
                font-weight: bold;
                line-height: 30px;
                text-align: center;
                width: 30px;
                height: 30px;
            }

            .user-list .user-item .user .status-icon {
                position: absolute;
                width: 12px;
                height: 12px;
                bottom: 20px;
                left: 44px;
                border: 2px solid;
                border-radius: 50% !important;
                bottom: 3px;
                left: 23px;
                border-color: #f5f5f5;
                background-color: #707e88;
            }

                .user-list .user-item .user .status-icon.online {
                    background-color: #27c140;
                }

        .user-list .user-item .content-list {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-shrink: 1;
            overflow: hidden;
            align-self: stretch;
            justify-content: center;
            margin-left: 10px;
            width: calc(100% - 46px);
            text-align: left;
        }

            .user-list .user-item .content-list .chat-name {
                font-size: 14px;
                font-weight: 500;
                color: #111;
                margin-top: 0;
                margin-bottom: 2px;
            }

            .user-list .user-item .content-list .chat-desc {
                white-space: nowrap !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                color: rgb(138, 141, 145);
                margin: 0;
                display: block;
            }


.baigiang-content {
    font-size: 14px;
    line-height: 1.5
}

.submit-diemdanh {
    text-align: center;
    padding: 10px;
}

    .submit-diemdanh .btn_submit_diemdanh {
        padding: 6px 12px;
        border: 1px solid #ff5a00;
        background-color: #ff5a00;
        color: #fff;
        border-radius: 4px !important;
        width: 100%;
        border-bottom: 2px solid #dc560d !important;
    }

.icon-chat {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

    .icon-chat.icon-upload {
        background-image: url('../img/icons/i-upload.png');
    }

    .icon-chat.icon-upload-bg {
        background-image: url('../img/icons/i-upload-bg.png');
    }

    .icon-chat.icon-upload-ebg {
        background-image: url('../img/icons/i-upload-ebg.png');
    }

    .icon-chat.icon-rload {
        background-image: url('../img/icons/r-load.png');
    }

.main-section-content .iframe-video {
    margin-bottom: 10px;
}

.p-view {
    margin-top: 20px;
    margin-bottom: 20px;
}

.view-more {
    box-shadow: none;
    border: none;
    outline: none;
    cursor: pointer;
    background: #ddd;
    padding: 10px;
    font-weight: 700;
    margin-top: 20px;
}

.post-topbar {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
}

    .post-topbar .post-meta {
        display: inline-block
    }

@media only screen and (max-width: 600px) {
    .sun_pub_mid_foot .poster-left-buttons {
        float: unset;
    }

        .sun_pub_mid_foot .poster-left-buttons .btn {
            margin-bottom: 10px;
        }
}

@media only screen and (max-width: 500px) {
    .banner-cover .banner-title {
        font-size: 20px;
        margin: 20px 0px 10px 0px;
    }

    .line-chart .item .number {
        font-size: 14px;
    }
}

@media only screen and (max-width: 400px) {
    .banner-cover .banner-title {
        margin: 10px 0px 10px 0px;
    }

    .line-chart .button-lhp {
        padding: 5px 10px;
    }

    .line-chart .item .number {
        font-size: 12px;
    }
}
.btn-reload-bg {
    border-radius: 34px !important;
    padding: 5px 20px;
    background: url(../img/icons/r-load.png) #fff 10px center no-repeat !important;
}
    .btn-reload-bg:hover {
        color: #037953 !important;
    }
    .btn-reload-bg span {
        padding-left: 15px;
    }
    .icon-chat {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    .icon-chat.icon-upload {
        background-image: url('../img/icons/i-upload.png');
    }

    .icon-chat.icon-upload-bg {
        background-image: url('../img/icons/i-upload-bg.png');
    }

    .icon-chat.icon-upload-ebg {
        background-image: url('../img/icons/i-upload-ebg.png');
    }

    .icon-chat.icon-rload {
        background-image: url('../img/icons/r-load.png');
    }

/* tra cứu sinh vien */

.tracuu-bg {
    background-image: url(../img/tracuusinhvien/bg-body.png);
    background-repeat: no-repeat;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
}

.tracuu-header {
    background-color: #fff;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.tracuu-title {
    font-size: 40px;
    color: #004eb8;
    font-family: montserrat;
    font-weight: 700;
}

.tracuu-search {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
}

    .tracuu-search .search-title {
        font-size: 24px;
        color: #004eb8;
        font-weight: 700;
    }

    .tracuu-search .search-form {
        position: relative;
        margin-left: 15px;
    }

        .tracuu-search .search-form .f-control {
            width: 500px;
            border: 1px solid #004eb8;
            border-radius: 10px !important;
            padding: 13px 12px;
        }

        .tracuu-search .search-form .btn-control {
            position: absolute;
            right: 0px;
            top: 1px;
            padding: 13px 20px;
            border: none;
            border-radius: 0px 10px 10px 0px !important;
            background: #004eb8;
            color: #fff;
        }

.tracuu-body {
    padding: 100px 30px;
}

.tracuu-wapper .columns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: -15px;
}

    .tracuu-wapper .columns .column {
        padding: 15px;
    }

        .tracuu-wapper .columns .column:nth-child(1) {
            width: 300px;
        }

        .tracuu-wapper .columns .column:nth-child(2) {
            width: calc(100% - 300px);
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin: -15px;
            padding-right: 0;
        }

.tracuu-wapper .tracuu-info {
    background-color: #fff;
    padding: 70px 0px;
    border-radius: 10px !important;
    position: relative;
}

    .tracuu-wapper .tracuu-info .tracuu-avatar {
        position: absolute;
        top: -50px;
        left: 50%;
        margin-left: -50px;
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: 100% !important;
        overflow: hidden;
        border: 2px solid #004eb8
    }

    .tracuu-wapper .tracuu-info ul li {
        padding: 15px;
        border-bottom: 1px solid #eaeaea;
    }

    .tracuu-wapper .tracuu-info .name-text {
        color: #004eb8;
        font-size: 18px;
        margin-top: 5px;
        font-weight: 700;
    }

.tracuu-wapper .tracuu-item {
    width: 50%;
    padding: 15px;
}

    .tracuu-wapper .tracuu-item .item-wapper {
        background-color: #1296c7;
        border-radius: 10px !important;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 30px;
    }

    .tracuu-wapper .tracuu-item:nth-child(1) .item-wapper {
        background-color: #df2323;
    }

    .tracuu-wapper .tracuu-item:nth-child(2) .item-wapper {
        background-color: #ec6327;
    }

    .tracuu-wapper .tracuu-item:nth-child(3) .item-wapper {
        background-color: #2c97de;
    }

    .tracuu-wapper .tracuu-item:nth-child(4) .item-wapper {
        background-color: #23c50f;
    }

    .tracuu-wapper .tracuu-item .link-title {
        font-size: 28px;
        color: #fff;
        font-weight: 700;
        flex: auto;
    }

@media only screen and (max-width: 768px) {
    .tracuu-wapper .tracuu-item {
        width: 100%;
        padding: 15px;
    }
}

@media only screen and (max-width: 600px) {
    .tracuu-wapper .tracuu-item {
        width: 100%;
    }

    .tracuu-wapper .columns .column:nth-child(1),
    .tracuu-wapper .columns .column:nth-child(2) {
        width: 100%;
        padding: 15px;
        margin: 0;
    }

    .tracuu-search {
        flex-direction: column;
    }

        .tracuu-search .search-form .f-control {
            width: 300px;
        }
}

@media only screen and (max-width: 400px) {


    .tracuu-title {
        font-size: 30px;
    }

    .tracuu-search .search-title {
        font-size: 20px;
    }
}`;

export const BASE_CSS = `@charset "UTF-8";

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
}

body {
    background: #e7ecf0;
    color: #667580;
    font-size: 12px;
    font-family: Tahoma !important
}

.row {
    margin-right: -7.5px;
    margin-left: -7.5px;
}

.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    padding-right: 7.5px;
    padding-left: 7.5px;
}

img {
    max-width: 100%;
    height: auto;
    object-fit: cover
}

    img.w-100 {
        width: 100%;
    }

input,
button {
    outline: 0;
}

ol, ul {
    list-style: none;
}

a {
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

    a:hover, a:focus {
        text-decoration: none;
        color: #1da1f2;
    }

svg.feather {
    vertical-align: middle;
    margin-top: -4px;
    width: 19px;
    height: 19px;
}

.pointer {
    cursor: pointer;
}

.img-post-input {
    background-image: url('../img/edit.png');
    background-position-y: 2px;
}

.img-post-comment {
    background-image: url('../img/Icon_ Comments.png')
}

.img-post-retweets {
    background-image: url('../img/Icon_ Retweets.png')
}

.img-post-liked {
    background-image: url('../img/Icon_ Liiked.png')
}

.img-post-share {
    background-image: url('../img/Icon_ Share.png')
}

.img-post-date {
    background-image: url('../img/date.png')
}

.img-post-home {
    background-image: url('../img/icons/home-lg-alt.png')
}

.img-setting {
    background-image: url('../img/icons/setting/setting.png');
}

.img-shield {
    background-image: url('../img/icons/setting/shield.png');
}

.img-user-circle {
    background-image: url('../img/icons/setting/user-circle.png');
}

.img-lock {
    background-image: url('../img/icons/setting/lock.png');
}

.img-calendar-star {
    background-image: url('../img/icons/setting/calendar-star.png');
}

.img-ballot-check {
    background-image: url('../img/icons/setting/ballot-check.png');
}

.img-address-book {
    background-image: url('../img/icons/setting/address-book.png');
}

.img-bookmark {
    background-image: url('../img/icons/setting/bookmark.png');
}

.img-exclamation-triangle {
    background-image: url('../img/icons/setting/exclamation-triangle.png');
}

.img-post-icon {
    background-repeat: no-repeat;
    width: 20px;
    height: 16px;
    display: inline-block;
    vertical-align: middle
}

/* btn */
.btn.active, .btn:active {
    box-shadow: none;
}

    .btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
        outline: 0;
    }

.btn-save {
    border: 1px solid #1da1f2;
    background-color: #1da1f2;
    color: #fff;
}

    .btn-save:hover {
        border: 1px solid #1da1f2;
        background-color: #fff;
        color: #1da1f2;
    }

.btn-close {
    border: 1px solid #e7ecf0;
    background-color: #fff;
    color: #1da1f2;
}

    .btn-close:hover {
        border: 1px solid #e7ecf0;
        background-color: #1da1f2;
        color: #fff;
    }

.portlet > .portlet-title > .actions .btn-action {
    background-color: #1da1f2;
    color: #fff;
    border-radius: 3px !important;
}

    .portlet > .portlet-title > .actions .btn-action:hover {
        background-color: #e7ecf0;
        color: #1da1f2;
    }
/* end */

/* Table */

.colorSTLichHoc {
    background: #e7ecf0;
}

.colorSTLichThi {
    background: #fdff9a;
}

.colorSTTamNgung {
    background: linear-gradient(#f14f3f 0,#cb4335 100%);
}

.btn-action {
    background-color: #1da1f2;
    color: #fff;
    border-radius: 3px !important;
    border: none;
}

#table-color .table-custom thead {
    background: #e3f3f8;
    border-bottom: 0;
    color: #1f9ede;
}

    #table-color .table-custom thead th {
        border: 1px solid #e3f3f8;
    }

#table-color .table-custom tbody tr:nth-child(odd) {
    background: #ececec;
}

#table-color .table-custom tbody tr:nth-child(even) {
    background: #f5f5f5;
}

#table-color .table-custom tbody td {
    border: 1px solid #fff;
}

/* Setting */
.theme-color .color-default {
    background: #384289;
}

.theme-color .color-default1 {
    background: #9C27B0;
}

.theme-color .color-default2 {
    background: #3F51B5;
}

.theme-color .color-default3 {
    background: #cc0000;
}

.theme-color .color-default4 {
    background: #0099cc;
}

.theme-color .color--primary {
    background: #78858f
}

.theme-color .color--two {
    background: #79958f
}

.theme-color .color--three {
    background: #799964
}

/*384289*/

#dashboard-primary-color {
    color: #384289;
}

    #dashboard-primary-color a:hover, #dashboard-primary-color a:focus {
        color: #384289;
    }

    #dashboard-primary-color .accordion-menu ul li a {
        color: #fff;
        background: #384289;
    }

        #dashboard-primary-color .accordion-menu ul li a:hover {
            color: #384289;
            background: #ffffff;
        }

    #dashboard-primary-color .accordion-menu > ul > li > a {
        border-bottom: solid 1px #414da0;
    }

    #dashboard-primary-color .portlet > .portlet-title > .actions .btn-action,
    #dashboard-primary-color .btn-action {
        background-color: #384289;
    }

        #dashboard-primary-color .portlet > .portlet-title > .actions .btn-action:hover,
        #dashboard-primary-color .portlet > .portlet-title > .actions .btn-action:focus,
        #dashboard-primary-color .btn-action:hover {
            background-color: #e7ecf0 !important;
            color: #384289;
        }

    #dashboard-primary-color .us-links li:hover a {
        color: #384289;
    }

    #dashboard-primary-color .table-custom thead,
    #dashboard-primary-color .fl-table thead {
        white-space: nowrap;
        background: #384289;
        color: #ffffff;
    }

    #dashboard-primary-color .table-custom tbody .row-head {
        color: #f15253;
        background: #e7ecf0;
    }


#dashboard-two-color {
    color: #333;
}

    #dashboard-two-color a:hover, #dashboard-two-color a:focus {
        color: #a292bc
    }

    #dashboard-two-color .accordion-menu ul li a {
        color: #fff;
        background: #705697;
    }

        #dashboard-two-color .accordion-menu ul li a:hover {
            color: #fff;
            background: rgba(0, 0, 0, 0.14);
        }

    #dashboard-two-color .accordion-menu > ul > li > a {
        border-bottom: solid 1px rgba(0, 0, 0, 0.14);
    }

    #dashboard-two-color .portlet > .portlet-title > .actions .btn-action,
    #dashboard-two-color .btn-action {
        background-color: #705697;
    }

        #dashboard-two-color .portlet > .portlet-title > .actions .btn-action:hover,
        #dashboard-two-color .portlet > .portlet-title > .actions .btn-action:focus,
        #dashboard-two-color .btn-action:hover {
            background-color: #e7ecf0 !important;
            color: #384289;
        }

    #dashboard-two-color .us-links li:hover a {
        color: #384289;
    }

    #dashboard-two-color .table-custom thead,
    #dashboard-two-color .fl-table thead {
        white-space: nowrap;
        background: #705697;
        color: #ffffff;
    }

    #dashboard-two-color .table-custom tbody .row-head {
        color: #f15253;
        background: #e7ecf0;
    }

    #dashboard-two-color .portlet > .portlet-title > .caption {
        color: #9C27B0 !important;
    }

    #dashboard-two-color .btn-close {
        color: #705697;
    }

    #dashboard-two-color h3.title-table {
        color: #a292bc;
    }

#dashboard-three-color {
    color: #757575
}

    #dashboard-three-color a:hover, #dashboard-three-color a:focus {
        color: #a292bc
    }

    #dashboard-three-color .accordion-menu ul li a {
        color: #fff;
        background: #39527b;
    }

        #dashboard-three-color .accordion-menu ul li a:hover {
            color: #fff;
            background: #DB142F;
        }

    #dashboard-three-color .accordion-menu > ul > li > a {
        border-bottom: solid 1px rgba(0, 0, 0, 0.14);
    }

    #dashboard-three-color .portlet > .portlet-title > .actions .btn-action,
    #dashboard-three-color .btn-action {
        background-color: #97adcf;
    }

        #dashboard-three-color .portlet > .portlet-title > .actions .btn-action:hover,
        #dashboard-three-color .portlet > .portlet-title > .actions .btn-action:focus,
        #dashboard-three-color .btn-action:hover {
            background-color: #e7ecf0 !important;
            color: #384289;
        }

    #dashboard-three-color .us-links li:hover a {
        color: #384289;
    }

    #dashboard-three-color .table-custom thead,
    #dashboard-three-color .fl-table thead {
        white-space: nowrap;
        background: #39527b;
        color: #ffffff;
    }

    #dashboard-three-color .table-custom tbody .row-head {
        color: #f15253;
        background: #e7ecf0;
    }

    #dashboard-three-color .portlet > .portlet-title > .caption {
        color: #3F51B5 !important;
    }

    #dashboard-three-color .btn-close {
        color: #705697;
    }

    #dashboard-three-color h3.title-table {
        color: #a292bc;
    }

#dashboard-four-color {
    color: #757575
}

    #dashboard-four-color a:hover, #dashboard-four-color a:focus {
        color: #a292bc
    }

    #dashboard-four-color .accordion-menu ul li a {
        color: #fff;
        background: #657580;
    }

        #dashboard-four-color .accordion-menu ul li a:hover {
            color: #fff;
            background: #cc0000;
        }

    #dashboard-four-color .accordion-menu > ul > li > a {
        border-bottom: solid 1px rgba(0, 0, 0, 0.14);
    }

    #dashboard-four-color .portlet > .portlet-title > .actions .btn-action,
    #dashboard-four-color .btn-action {
        background-color: #657580;
    }

        #dashboard-four-color .portlet > .portlet-title > .actions .btn-action:hover,
        #dashboard-four-color .portlet > .portlet-title > .actions .btn-action:focus,
        #dashboard-four-color .btn-action:hover {
            background-color: #e7ecf0 !important;
            color: #384289;
        }

    #dashboard-four-color .us-links li:hover a {
        color: #384289;
    }

    #dashboard-four-color .table-custom thead,
    #dashboard-four-color .fl-table thead {
        white-space: nowrap;
        background: #657580;
        color: #ffffff;
    }

    #dashboard-four-color .table-custom tbody .row-head {
        color: #f15253;
        background: #e7ecf0;
    }

    #dashboard-four-color .portlet > .portlet-title > .caption {
        color: #cc0000 !important;
    }

    #dashboard-four-color .btn-close {
        color: #705697;
    }

    #dashboard-four-color h3.title-table {
        color: #a292bc;
    }

#dashboard-five-color {
    color: #757575
}

    #dashboard-five-color a:hover, #dashboard-five-color a:focus {
        color: #a292bc
    }

    #dashboard-five-color .accordion-menu ul li a {
        color: #fff;
        background: #33b5e5;
    }

        #dashboard-five-color .accordion-menu ul li a:hover {
            color: #fff;
            background: #338be5;
        }

    #dashboard-five-color .accordion-menu > ul > li > a {
        border-bottom: solid 1px rgba(0, 0, 0, 0.14);
    }

    #dashboard-five-color .portlet > .portlet-title > .actions .btn-action,
    #dashboard-five-color .btn-action {
        background-color: #33b5e5;
    }

        #dashboard-five-color .portlet > .portlet-title > .actions .btn-action:hover,
        #dashboard-five-color .portlet > .portlet-title > .actions .btn-action:focus,
        #dashboard-five-color .btn-action:hover {
            background-color: #e7ecf0 !important;
            color: #0099cc;
        }

    #dashboard-five-color .us-links li:hover a {
        color: #384289;
    }

    #dashboard-five-color .table-custom thead,
    #dashboard-five-color .fl-table thead {
        white-space: nowrap;
        background: #33b5e5;
        color: #ffffff;
    }

    #dashboard-five-color .table-custom tbody .row-head {
        color: #f15253;
        background: #e7ecf0;
    }

    #dashboard-five-color .portlet > .portlet-title > .caption {
        color: #0099cc !important;
    }

    #dashboard-five-color .btn-close {
        color: #705697;
    }

    #dashboard-five-color h3.title-table {
        color: #a292bc;
    }`;
