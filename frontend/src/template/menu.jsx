import React from "react";

export default props => (
    <nav className="nav navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-calendar-check-o"></i>
                        TodoApp
                </a>
            </div>

            <div i='navbar' className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li> <a href="#/todos"></a>Tarefas</li>
                    <li> <a href="#/todos"></a>Sobre</li>
                </ul>
            </div>
        </div>
    </nav>
)