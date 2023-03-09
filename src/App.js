import "./App.css";
import React, { Component } from "react";

class Nav extends Component {
    /*
    state = {
        list: [],
    };

    componentDidMount() {
        fetch("./data/list.json")
            .then((result) => result.json())
            .then((data) => {
                this.setState({
                    list: data,
                });
            });
    }
    */

    render() {
        let url = "";
        let listTag = this.props.list.map((list) => {
            return (
                <li key={list.id}>
                    <a
                        href={url}
                        data-id={list.id}
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onClick(e.target.dataset.id);
                        }}
                    >
                        {list.title}
                    </a>
                </li>
            );
        });

        return (
            <nav>
                <ul>{listTag}</ul>
            </nav>
        );
    }
}
class Article extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </article>
        );
    }
}

class App extends Component {
    state = {
        article: { title: "welcome", desc: "Hello, react & Ajax" },
        list: [],
    };
    componentDidMount() {
        fetch("./data/list.json")
            .then(function (result) {
                return result.json();
            })
            .then(
                function (data) {
                    console.log(data);
                    this.setState({ list: data });
                }.bind(this)
            );
    }

    render() {
        return (
            <div className="App">
                <h1>Web</h1>
                <Nav
                    list={this.state.list}
                    onClick={(id) => {
                        fetch(`./data/${id}.json`)
                            .then((result) => result.json())
                            .then((data) => {
                                this.setState({
                                    article: {
                                        title: data.title,
                                        desc: data.desc,
                                    },
                                });
                            });
                    }}
                />
                <Article
                    title={this.state.article.title}
                    desc={this.state.article.desc}
                />
            </div>
        );
    }
}

export default App;
